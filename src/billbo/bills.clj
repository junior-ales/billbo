(ns billbo.bills
  (:require [liberator.core :refer [defresource request-method-in]]
            [billbo.request-handler :refer [read-body]]
            [db.db-core :refer [create-bill! db-spec list-bills]]
            [clj-time.format :as fmt]
            [clj-time.core :as tim]
            [clojure.data.json :as json]))

;;changing this to get utc date soon...
(defn now [] (new java.util.Date))

(def temp-bill (atom nil))

(extend-type java.sql.Date
  json/JSONWriter
  (-write [date out]
    (json/-write (str date) out)))

(defn save-bill [bill picture]
  (let [{:keys [bill-id issued-by total-amount due-date current-status]} bill
        created_by "billbo"
        created_time (now)
        last_updated_by "billbo"
        last_updated_time (now)]
    (try
      (create-bill! db-spec bill-id issued-by total-amount due-date current-status picture created_by last_updated_by)
      (catch Exception e (throw (.getNextException e))))))

(defn list-all-bills []
  (seq (list-bills db-spec)))

(defn gen-bill-id []
  (str (fmt/unparse (fmt/formatter "yyyyMMddHHmmssSSS") (tim/now))
       (format "%04d" (rand-int 9999))))

(defn create-bill [bill-request]
  (let [bill-id (gen-bill-id)
        {:strs [issued-by total-amount due-date]} bill-request]
    {:bill-id        bill-id
     :picture-link   (str "/bills/" bill-id "/picture")
     :issued-by      issued-by
     :total-amount   total-amount
     :due-date       due-date
     :current-status "open"}))

(defresource bills-resource
             :allowed-methods [:post :get]
             :available-media-types ["application/json"]
             :available-charsets ["utf-8"]
             :post! (fn [ctx]
                      (let [body (read-body ctx)]
                        (save-bill (create-bill body) (body "picture"))
                        (swap! temp-bill (fn [_] body))))
             :handle-ok (fn [_] (list-all-bills))
             :handle-created (fn [_] (create-bill @temp-bill)))




