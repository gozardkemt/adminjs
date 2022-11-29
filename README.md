## Ejected Create React App w/ typescript + AdminJS with TypeORM mapping postgresql db

Start guide:

BACKEND
- install db
    `$ brew install postgresql`
    more info: https://wiki.postgresql.org/wiki/Homebrew

- create db
    `createdb [connection-option...] [option...] [dbname [description]]`
    more info: https://www.postgresql.org/docs/current/app-createdb.html

- test if db running
    `psql` => `\list` => `\q`
    
- insert [dbname] and its credentials to file `backend/src/data-source.ts`

-  run `yarn && yarn start`
    
FRONTEND
- run `yarn && yarn start`
