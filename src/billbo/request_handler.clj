(ns billbo.request-handler
  (:require [clojure.java.io :as io]
            [clojure.data.json :as json]))

(defn read-body [ctx]
  (json/read (io/reader (get-in ctx [:request :body]))))