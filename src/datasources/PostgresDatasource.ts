import { DataSource } from "typeorm"

const PostgresDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "myapp",
    // synchronize: true,
    // logging: true,
    entities: [
        "src/entities/*.ts"
    ],
    "migrations": [
        "src/database/migrations/*.ts"
   ],
})

PostgresDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

    export default PostgresDataSource;