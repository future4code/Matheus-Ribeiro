import { CreateFriendshipDatabase } from "../../data/create-friendship-db";
import { BadRequest } from "../../errors/BadRequest";
import { InvalidFriendship } from "../../errors/InvalidFriendship";
import { generateId } from "../../services/id-generate";
import { CreateFriendshipRequestDTO } from "../repositories/create-friendship-repository";

export class CreateFriendshipUseCase {
  constructor(
    private createFriendshipDatabase: CreateFriendshipDatabase
  ) {}

  async execute(friendship: CreateFriendshipRequestDTO): Promise<void> {
    try {
      if (!friendship.user_id || !friendship.friend_id) {
        throw new BadRequest()
      }

      const friendshipExists = await this.createFriendshipDatabase.find(friendship)

      if (friendshipExists) {
        throw new InvalidFriendship();
      }

      const friendshipUser = {
        id: generateId(),
        user_id: friendship.user_id,
        friend_id: friendship.friend_id,
      };

      const friendshipFriend = {
        id: generateId(),
        user_id: friendship.friend_id,
        friend_id: friendship.user_id,
      };

      await this.createFriendshipDatabase.create(friendshipFriend);
      await this.createFriendshipDatabase.create(friendshipUser);
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage);
    }
  }
}
