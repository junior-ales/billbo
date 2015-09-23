(ns db.migrations
  (:require [migratus.core :as migratus]
            [billbo.env :refer [read-env]]))

(def billbo-database-url (read-env "BILLBO_DATABASE_URL"))
(def billbo-database-admin-user (read-env "BILLBO_DATABASE_ADMIN_USER"))
(def billbo-database-admin-password (read-env "BILLBO_DATABASE_ADMIN_PASSWORD"))

(def db-config {:store         :database
                :migration-dir "migrations"
                :db            {:connection-uri billbo-database-url
                                :user           billbo-database-admin-user
                                :password       billbo-database-admin-password}})

(defn migrate [command]
  (if (= command "up") (migratus/migrate db-config))
  (if (= command "down") (migratus/rollback db-config)))