[![Build Status](https://snap-ci.com/junior-ales/billbo/branch/master/build_image)](https://snap-ci.com/junior-ales/billbo/branch/master)
# Billbo

A Clojure library designed to ... well, that part is up to you.

## Usage

You will need:
- Java 8
- Postgresql Server
- Lein 2

How to configure the DB for mac:

- Install postgres: brew install postgres
- Create this directory: mkdir /tmp/billbo
- Initialize the db: psql -d billbo -a -f resources/init_db.sql
The migrations run automatically when you start the app.

How to run:

- Clone the repo
- Source export_variables.sh: src resources/export_variables.sh
- lein run

## Frontend Development

Please, refer to [resources/README.md](https://github.com/junior-ales/billbo/blob/master/resources/README.md)

## License

Copyright © 2015 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
