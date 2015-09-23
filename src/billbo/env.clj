(ns billbo.env)

(defn read-env [property-name]
  (let [value (System/getenv property-name)]
    (if (nil? value)
      (throw (IllegalStateException. (str "Could not find property " property-name " in the environment")))
      value)))
