(ns billbo.core
  (:require [compojure.core :refer [defroutes ANY routes]]
            [compojure.handler :refer [api]]
            [compojure.route :as route]
            [ring.adapter.jetty :as jetty]
            [liberator.core :refer [defresource request-method-in]]
            [clojure.java.io :as io]
            [ring.middleware.multipart-params :refer [wrap-multipart-params]]
            [billbo.bills :refer [bills-resource]]))

(defn main-routes []
  (->
    (routes
      (ANY "/" [] (io/resource "public/index.html"))
      (ANY "/bills" [] bills-resource)
      (route/resources "/")
      (route/not-found {:resource "" :body "Not found"}))))

(def handler
  (->
    (main-routes)
    api
    wrap-multipart-params))

(defn start [options]
  (jetty/run-jetty #'handler (assoc options :join? false)))

;; Server
(defn -main
  ([port] (start {:port (Integer/parseInt port)}))
  ([] (-main "3000")))

