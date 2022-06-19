import Knex from "knex";
import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export abstract class ConnectionDatabase {
  protected static connection: Knex = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      port: 3306 || process.env.PORT,
      multipleStatements: true,
    },
  });
}
