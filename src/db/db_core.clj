(ns db.db-core
  (require [yesql.core :refer [defqueries]]
           [billbo.env :refer [read-env]]))

(def billbo-database-url (read-env "BILLBO_DATABASE_URL"))
(def billbo-database-app-user (read-env "BILLBO_DATABASE_APP_USER"))
(def billbo-database-app-password (read-env "BILLBO_DATABASE_APP_PASSWORD"))

(def db-spec {:connection-uri billbo-database-url
              :user           billbo-database-app-user
              :password       billbo-database-app-password})

(defqueries "sql/bills.sql")
