# docker-e2e-tests
Integration tests project for the Docker E2E tutorial

## Description

This module contains 3 things

* **database seeding script:** a simple script that inserts some base objects into mongo
* **e2e tests:** codecept/nightmare acceptance tests
* **docker-compose:** all the configuration needed to run the tests starting: mongo, frontend, backend; running the db seeding script and then running the e2e tests.

## How to run

You need to have docker "edge" version installed in your system

```bash
docker-compose up --exit-code-from tests
```

## Making changes

If you perform changes then you need to rebuid

```bash
docker-compose build
```

Then start with the same command mentioned above

