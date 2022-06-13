import { GetFeedRepository } from "../application/repositories/get-feed-repository";
import { Post } from "../model/Post";
import { ConnectionDatabase } from "./connection-db";

export class GetFeedDatabase extends ConnectionDatabase implements GetFeedRepository {
    async get(user_id: string): Promise<Post[]> {
        const posts: Post[] = await GetFeedDatabase.connection('labook_posts')
          .select(
            'labook_posts.id_user',
            'labook_users.name',
            'labook_posts.id',
            'labook_posts.photo',
            'labook_posts.description',
            'labook_posts.creation_date',
            'labook_posts.type'
          )

          .join('labook_posts', 'labook_posts.id_user', 'labook_friendships.friend_id')
          .join('labook_users', 'labook_users.id', 'labook_posts.id_user')
          .orderBy('labook_posts.creation_date', 'desc')
          .where('labook_friendships.user_id', user_id)
        
        return posts
    }
}