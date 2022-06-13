import { Request, Response } from "express";
import { DeleteFriendshipRequestDTO } from "../application/repositories/delete-friendship-repository";
import { DeleteFriendshipUseCase } from "../application/usecases/delete-friendship-usecase";

export class DeleteFriendshipController {
  constructor(private deleteFriendshipUseCase: DeleteFriendshipUseCase) {}
  async delete(req: Request, res: Response): Promise<void> {
    try {
      const {user_id, friend_id} = req.body;

      const friendship: DeleteFriendshipRequestDTO = {
        user_id,
        friend_id,
      }
      await this.deleteFriendshipUseCase.execute(friendship);
      res.status(201).send("Friendship deleted with success");
    } catch (error: any) {
      res.status(400).send(error.message || error.sqlMessage);
    }
  }
}
