(defproject billbo "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [
                 [org.clojure/clojure "1.7.0"]
                 [compojure "1.0.2"]
                 [ring/ring-jetty-adapter "1.1.0"]
                 [liberator "0.9.0"]
                 [ring/ring-mock "0.3.0"]
                 [migratus "0.8.4"]
                 [org.postgresql/postgresql "9.4-1201-jdbc41"]
                 [yesql "0.4.2"]
                 [clj-time "0.11.0"]]
  :plugins [[lein-ring "0.9.7"]]
  :ring {:handler billbo.core/handler}
  :main billbo.core)
