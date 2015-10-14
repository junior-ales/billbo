(ns db.db-core
  (require [yesql.core :refer [defqueries]]
		[environ.core :refer [env]]))

(def billbo-database-url (env :billbo-database-url))
(def billbo-database-app-user (env :billbo-database-app-user))
(def billbo-database-app-password (env :billbo-database-app-password))

(def db-spec {:connection-uri billbo-database-url
              :user           billbo-database-app-user
              :password       billbo-database-app-password})

(defqueries "sql/bills.sql")
