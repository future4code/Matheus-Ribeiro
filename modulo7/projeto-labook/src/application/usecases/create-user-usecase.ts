import { CreateUserDatabase } from "../../data/create-user-db";
import { BadRequest } from "../../errors/BadRequest";
import { InvalidEmail } from "../../errors/InvalidEmail";
import { InvalidName } from "../../errors/InvalidName";
import { InvalidPassword } from "../../errors/InvalidPassword";
import { InvalidUser } from "../../errors/InvalidUser";
import { User } from "../../model/User";
import { emailValidator } from "../../services/emailValidator";
import { generateId } from "../../services/id-generate";
import { CreateUserResquestDTO } from "../repositories/create-user-repository";

export class CreateUserUseCase {
  constructor(private createUserDatabase: CreateUserDatabase) {}
  public async execute({
    name,
    email,
    password,
  }: CreateUserResquestDTO): Promise<void> {
    try {
      if (!name || !email || !password) {
        throw new BadRequest()
      }

      if (name.length < 2) {
        throw new InvalidName()
      }

      if (!emailValidator(email)) {
        throw new InvalidEmail()
      }

      if (password.length < 8) {
        throw new InvalidPassword()
      }

      const existsUser = await this.createUserDatabase.findByEmail(email);

      if (existsUser) {
        throw new InvalidUser();
      }

      const user: User = {
        id: generateId(),
        name,
        email,
        password,
      }

      await this.createUserDatabase.create(user);
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage);
    }
  }
}
