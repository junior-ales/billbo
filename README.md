[![Build Status](https://snap-ci.com/junior-ales/billbo/branch/master/build_image)](https://snap-ci.com/junior-ales/billbo/branch/master)

# Billbo
________________________________________________________________________
Help an institution to help people

## Usage

### You will need:

- [Java 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html);
- [Postgresql Server](http://www.postgresql.org/download);
- [Lein 2](http://leiningen.org);

### How to configure the DB for *mac*:

- Install postgres: `brew install postgres`
- Create this directory: `mkdir /tmp/billbo`
- Initialize the db: `psql -d billbo -a -f resources/init_db.sql`
- Copy the db-env config into the root: `cp resources/.db-env .lein-env`

The migrations run automatically when you start the app.

### How to run:

- Clone the repo;
- `lein run`

## Frontend Development

Please, refer to [resources/README.md](https://github.com/junior-ales/billbo/blob/master/resources/README.md)

## License

Copyright © 2015 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
