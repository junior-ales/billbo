[![Build Status](https://snap-ci.com/junior-ales/billbo/branch/master/build_image)](https://snap-ci.com/junior-ales/billbo/branch/master)

# Billbo

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

The MIT License (MIT)

Copyright (c) 2015 Junior Ales

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
