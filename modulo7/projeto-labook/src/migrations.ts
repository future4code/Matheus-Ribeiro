import { ConnectionDatabase } from "./data/connection-db"

export default class Migration extends ConnectionDatabase {
  static createTables = async () => {
    try {
      await this.connection.raw(`
            CREATE TABLE labook_users (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL
            );
            CREATE TABLE labook_posts(
                id VARCHAR(255) PRIMARY KEY,
                photo VARCHAR(255) NOT NULL,
                description VARCHAR(255) NOT NULL,
                creation_date DATE NOT NULL,
                type ENUM("NORMAL","EVENTO") DEFAULT "NORMAL",
                id_user VARCHAR(255) NOT NULL,
                FOREIGN KEY (id_user) REFERENCES labook_users(id)
            );
            CREATE TABLE labook_friendship(
                id VARCHAR(255) PRIMARY KEY,
                id_user1 VARCHAR(255) NOT NULL,
                id_user2 VARCHAR(255) NOT NULL,
                FOREIGN KEY (id_user1) REFERENCES labook_users(id),
                FOREIGN KEY (id_user2) REFERENCES labook_users(id)
            );`)
    } catch (error: any) {
      console.log(error.message)
    }
  }
}

Migration.createTables()
