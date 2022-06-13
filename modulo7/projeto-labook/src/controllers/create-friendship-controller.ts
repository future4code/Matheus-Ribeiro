import { Request, Response } from "express";
import { CreateFriendshipRequestDTO } from "../application/repositories/create-friendship-repository";
import { CreateFriendshipUseCase } from "../application/usecases/create-friendship-usecase";

export class CreateFriendshipController {
  constructor(private createFriendshipUseCase: CreateFriendshipUseCase) {}
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { friend_id } = req.body;
      const user_id = req.headers.authorization as string;

      const friendship: CreateFriendshipRequestDTO = {
        user_id,
        friend_id,
      };
      await this.createFriendshipUseCase.execute(friendship);
      res.status(201).send("Friendship created");
    } catch (error: any) {
      res.status(400).send(error.message || error.sqlMessage);
    }
  }
}
