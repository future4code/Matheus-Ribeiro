import { CreateFriendshipRepository, CreateFriendshipRequestDTO } from "../application/repositories/create-friendship-repository";
import { Friendship } from "../model/Friendship";
import { ConnectionDatabase } from "./connection-db";

export class CreateFriendshipDatabase
  extends ConnectionDatabase
  implements CreateFriendshipRepository
{
  async create(friendship: Friendship): Promise<void> {
    await CreateFriendshipDatabase.connection("labook_friendships").insert(
      friendship
    );
  }
  async find({ user_id, friend_id }: CreateFriendshipRequestDTO): Promise<Friendship[]> {
    const friendships: Friendship[] = await CreateFriendshipDatabase.connection(
      "labook_friendships"
    )
      .where({ user_id })
      .andWhere({ friend_id });

      console.log(friendships)
    
      return friendships;
  }
}
