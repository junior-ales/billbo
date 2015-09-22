(ns db.migrations
  (:require [migratus.core :as migratus])
  (:import java.sql.Connection))

(def billbo-database-url (System/getenv "BILLBO_DATABASE_URL"))
(def billbo-database-admin-user (System/getenv "BILLBO_DATABASE_ADMIN_USER"))
(def billbo-database-admin-password (System/getenv "BILLBO_DATABASE_ADMIN_PASSWORD"))
(def billbo-database-app-user (System/getenv "BILLBO_DATABASE_APP_USER"))
(def billbo-database-app-password (System/getenv "BILLBO_DATABASE_APP_PASSWORD"))

(def billbo-database-url "jdbc:postgresql://localhost:5432/billbo")
(def billbo-database-admin-user "billbo_admin")
(def billbo-database-admin-password "billbo_admin")


(def db-config {:store         :database
                :migration-dir "migrations"
                :db            {:connection-uri billbo-database-url
                                :user           billbo-database-admin-user
                                :password       billbo-database-admin-password}})

(defn migrate [command]
  (if (= command "up") (migratus/migrate db-config))
  (if (= command "down") (migratus/rollback db-config)))