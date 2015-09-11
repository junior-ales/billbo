(ns frodo-test.core

(:require [compojure.core :refer [defroutes ANY]]
          [ring.adapter.jetty :as jetty]
          [liberator.core :refer [defresource request-method-in]]
          [clojure.java.io :as io]
          [clojure.data.json :as json]))

(def conteudo (atom "bla"))

(defresource handlejson
  :allowed-methods [:post :get]
  :available-media-types ["application/json"]
  :available-charsets ["utf-8"]
  :post! (fn[ctx] (swap! conteudo (fn[_] (json/read (io/reader (get-in ctx [:request :body]))))))
  :handle-ok (fn[_] @conteudo)
  :handle-created (fn[_] (str "Created " @conteudo)))

(defroutes main-routes
  (ANY "/" [] (io/resource "public/index.html"))
  (ANY "/jose" [] handlejson))

;; Server
(defn -main []
  (jetty/run-jetty main-routes {:port 3000}))
