import { ConnectionDatabase } from "./data/connection-db";

export default class Migration extends ConnectionDatabase {
  static createTables = async () => {
    try {
      await this.connection.raw(`
              CREATE TABLE IF NOT EXISTS labook_users (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL
            );
              CREATE TABLE IF NOT EXISTS labook_posts(
                id VARCHAR(255) PRIMARY KEY,
                photo VARCHAR(255) NOT NULL,
                description VARCHAR(255) NOT NULL,
                creation_date DATE NOT NULL,
                type ENUM("NORMAL","EVENTO") DEFAULT "NORMAL",
                id_user VARCHAR(255) NOT NULL,
                FOREIGN KEY (id_user) REFERENCES labook_users(id)
            );
              CREATE TABLE IF NOT EXISTS labook_friendships(
                id VARCHAR(255) PRIMARY KEY,
                user_id VARCHAR(255) NOT NULL,
                friend_id VARCHAR(255) NOT NULL,
                FOREIGN KEY (user_id) REFERENCES labook_users(id),
                FOREIGN KEY (friend_id) REFERENCES labook_users(id)
            );`);
    } catch (error: any) {
      console.log(error.message);
    }
  };
}

Migration.createTables();
