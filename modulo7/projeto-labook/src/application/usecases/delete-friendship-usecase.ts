
import { DeleteFriendshipDatabase } from "../../data/delete-friendship-db";
import { BadRequest } from "../../errors/BadRequest";
import { FriendshipNotFound } from "../../errors/FriendshipNotFound";
import { generateId } from "../../services/id-generate";
import { DeleteFriendshipRequestDTO } from "../repositories/delete-friendship-repository";

export class DeleteFriendshipUseCase {
  constructor(
    private deleteFriendshipDatabase: DeleteFriendshipDatabase
  ) {}

  async execute(friendship: DeleteFriendshipRequestDTO): Promise<void> {
    try {
      if (!friendship.user_id || !friendship.friend_id) {
        throw new BadRequest()
      }

      const friendshipExists = await this.deleteFriendshipDatabase.find(friendship)

      if (!friendshipExists) {
        throw new FriendshipNotFound()
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

      await this.deleteFriendshipDatabase.delete(friendshipFriend);
      await this.deleteFriendshipDatabase.delete(friendshipUser);
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage);
    }
  }
}
