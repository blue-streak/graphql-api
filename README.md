# GraphQL API [![Build Status](https://travis-ci.org/blue-streak/graphql-api.svg?branch=master)](https://travis-ci.org/blue-streak/graphql-api)

## Published image name

* [bluestreak/api](https://hub.docker.com/r/bluestreak/api/)

## Installation (local development)

```
npm install
cp local.env.dist local.env

npm start
```

## Run tests

```
npm test
```

## Running in production

```bash
docker run -p 9000:8080 -e MAGE_HOST="https://shop.m2-pwa.tk" -e MAGE_ADMIN_USERNAME="admin" -e MAGE_ADMIN_PASSWORD="password1234" bluestreak/api
```

