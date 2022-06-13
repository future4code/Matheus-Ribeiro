import {
  DeleteFriendshipRepository,
  DeleteFriendshipRequestDTO
} from '../application/repositories/delete-friendship-repository'
import { Friendship } from '../model/Friendship'
import { ConnectionDatabase } from './connection-db'

export class DeleteFriendshipDatabase
  extends ConnectionDatabase
  implements DeleteFriendshipRepository
{
  async delete({ user_id, friend_id }: Friendship): Promise<void> {
    await DeleteFriendshipDatabase.connection('labook_friendships')
      .where({ user_id })
      .andWhere({ friend_id })
      .del()
  }
  async find({ user_id, friend_id }: DeleteFriendshipRequestDTO): Promise<Friendship[]> {
    const friendships: Friendship[] = await DeleteFriendshipDatabase.connection(
      'labook_friendships'
    )
      .where({ user_id })
      .andWhere({ friend_id })

    return friendships
  }
}
