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

(def a-new-bill-request {:issued-by    "CEEE"
                         :total-amount 78.45
                         :due-date     "2015-10-15"
                         :picture      "picture-in-base64"})

(def a-new-bill-response {"bill-id"      "201510151845097800001"
                          "issued-by"    "CEEE"
                          "total-amount" 78.45
                          "due-date"     "2015-10-15"
                          "picture-link" "/bills/201510151845097800001/picture"})


(deftest bills-tests
  (testing "Creating a new bill"
    (with-redefs-fn {#'gen-bill-id (fn [] "201510151845097800001")}
      #(is (= (json-response (handler (build-post "/bills" a-new-bill-request)))
              a-new-bill-response)))))






