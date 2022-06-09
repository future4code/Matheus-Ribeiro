import { CreateUserDatabase } from "../../data/create-user-db";
import { generateId } from "../../services/id-generate";
import { UserResquestDTO } from "../repositories/user-repository";

export class CreateUserUseCase {
  constructor(private createUserDatabase: CreateUserDatabase) {}
  public async execute({
    name,
    email,
    password,
  }: UserResquestDTO): Promise<void> {
    const existsUser = await this.createUserDatabase.findByEmail(email);

    if (existsUser) {
      throw new Error("User already exists.");
    }

    const id = generateId();

    await this.createUserDatabase.create({ id, name, email, password });
  }
}
