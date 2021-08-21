import { createConnection } from "typeorm";
import { ENTITIES } from "../entities";

export const conection = createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    database: "events",
    username: "root",
    password: "root",
    logging: true,
    entities: ENTITIES
})