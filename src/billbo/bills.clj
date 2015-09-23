(ns billbo.bills
  (:require [liberator.core :refer [defresource request-method-in]]
            [billbo.request-handler :refer [read-body]]
            [db.db-core :refer [create-bill! db-spec]]))

;;changing this to get utc date soon...
(defn now [] (new java.util.Date))

(def temp-bill (atom nil))

(defn save-bill [bill picture]
  (let [{:keys [bill-id issued-by total-amount due-date current-status]} bill
        created_by "billbo"
        created_time (now)
        last_updated_by "billbo"
        last_updated_time (now)]
    (try
      (create-bill! db-spec bill-id issued-by total-amount due-date current-status picture created_by last_updated_by)
      (catch Exception e (throw (.getNextException e))))))

(defn gen-bill-id [] "")

(defn create-bill [bill-request]
  (let [bill-id (gen-bill-id)
        {:strs [issued-by total-amount due-date]} bill-request]
    {:bill-id      bill-id
     :picture-link (str "/bills/" bill-id "/picture")
     :issued-by    issued-by
     :total-amount total-amount
     :due-date     due-date
     :current-status "open"}))

(defresource bills-resource
             :allowed-methods [:post]
             :available-media-types ["application/json"]
             :available-charsets ["utf-8"]
             :post! (fn [ctx]
                      (let [body (read-body ctx)]
                        (save-bill (create-bill body) (body "picture"))
                        (swap! temp-bill (fn [_] body))))
             :handle-created (fn [_] (create-bill @temp-bill)))




