module.exports = {
    "type": "postgres",
    "host": "localhost",
    "port": "5432",
    "username": "postgres",
    "password": "1234",
    "database": "myapp",
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