(ns billbo.bills
  (:require [liberator.core :refer [defresource request-method-in]]
            [billbo.request-handler :refer [read-body]]))

(defresource bills-resource
             :allowed-methods [:post]
             :available-media-types ["application/json"]
             :available-charsets ["utf-8"]
             :post! (fn [ctx] (identity ctx))
             :handle-created (fn [_] {:id "OK"}))


