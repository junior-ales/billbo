(ns db.migrations
  (:require [migratus.core :as migratus]
            [environ.core :refer [env]]))

(def billbo-database-url (env :billbo-database-url))
(def billbo-database-admin-user (env :billbo-database-admin-user))
(def billbo-database-admin-password (env :billbo-database-admin-password))

(def db-config {:store         :database
                :migration-dir "migrations"
                :db            {:connection-uri billbo-database-url
                                :user           billbo-database-admin-user
                                :password       billbo-database-admin-password}})

(defn migrate [command]
  (if (= command "up") (migratus/migrate db-config))
  (if (= command "down") (migratus/rollback db-config)))