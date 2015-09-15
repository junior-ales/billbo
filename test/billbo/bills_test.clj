(ns billbo.bills-test
  (:require [clojure.test :refer :all]
            [billbo.bills :refer :all]
            [billbo.core :refer [handler]]
            [ring.mock.request :as mock]
            [billbo.request-handler :refer [read-body]]))

(defn build-post [url payload]
  (->
    (mock/request :post
                  url
                  (clojure.data.json/write-str payload))
    (mock/content-type "application/json")))

(defn json-response [response]
  (clojure.data.json/read-str (:body response)))

(def a-very-simple-bill {:id "OK"})

(deftest bills-tests
  (testing "Creating a new bill"
    (is (= (json-response (handler (build-post "/bills" a-very-simple-bill)))
           {"id" "OK"}))))




