export default {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'myapp',
    // synchronize: false,
    "entities": [
        "src/entities/*.ts",
    ],
    // "migrations": [
    //      "database/migrations/**/*.ts"
    // ],
    // "subscribers": [
    //     "src/subscriber/**/*.ts"
    // ],
    "cli": {
        // "entitiesDir": "src/entity",
        "migrationsDir": "src/database/migrations",
        // "subscribersDir": "src/subscriber"
    }
};