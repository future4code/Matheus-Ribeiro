import { CreateUserRepository } from "../application/repositories/create-user-repository";
import { User } from "../model/User";
import { ConnectionDatabase } from "./connection-db";

export class CreateUserDatabase
  extends ConnectionDatabase
  implements CreateUserRepository 
{
  async create({ id, name, email, password }: User): Promise<void> {
    await CreateUserDatabase.connection
      .insert({ id, name, email, password })
      .into("labook_users");
  }
  async findByEmail(email: string): Promise<User | undefined> {
    const user = await CreateUserDatabase.connection
      .select("*")
      .from("labook_users")
      .where({ email });

    return user[0];
  }
}
