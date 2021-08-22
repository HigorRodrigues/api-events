import { createConnection } from "typeorm";
import { ENTITIES } from "../entities";
import { User } from "../entities/user.entity";

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