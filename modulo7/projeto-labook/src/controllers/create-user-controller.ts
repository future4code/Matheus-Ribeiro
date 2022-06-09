import { Request, Response } from "express";
import { CreateUserUseCase } from "../application/usecases/create-user-usecase";

export class CreateUserController {
  constructor(private userRepositoryUseCase: CreateUserUseCase) {}

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, password } = req.body;

      await this.userRepositoryUseCase.execute({ name, email, password });

      res.status(201).send({ message: "User created with success." });
    } catch (error: any) {
      res.status(400).send({
        message: error.message || error.sqlMessage,
      });
    }
  }
}
