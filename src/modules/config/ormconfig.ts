export = {
   type: 'postgres',
   host: 'localhost',
   port: 5432,
   username: 'postgres',
   password: '1234',
   database: 'happy_goodall',
   // synchronize: false,
   "entities": [
       "src/entity/**/*.ts"
   ],
   "migrations": [
        "src/database/migrations/*.ts"
   ],
   "subscribers": [
       "src/subscriber/**/*.ts"
   ],
   "cli": {
       "entitiesDir": "src/entity",
       "migrationsDir": "src/database/migrations",
       "subscribersDir": "src/subscriber"
   }
}