(ns billbo.bills
  (:require [liberator.core :refer [defresource request-method-in]]
            [billbo.request-handler :refer [read-body]]))

(def temp-bill (atom nil))

(defn gen-bill-id [] "")

(defn create-bill [bill-request]
  (let [bill-id (gen-bill-id)
        {:strs [issued-by total-amount due-date]} bill-request]
    {:bill-id      bill-id
     :picture-link (str "/bills/" bill-id "/picture")
     :issued-by    issued-by
     :total-amount total-amount
     :due-date     due-date}))

(defresource bills-resource
             :allowed-methods [:post]
             :available-media-types ["application/json"]
             :available-charsets ["utf-8"]
             :post! (fn [ctx] (swap! temp-bill (fn [_] (read-body ctx))))
             :handle-created (fn [_] (create-bill @temp-bill)))




