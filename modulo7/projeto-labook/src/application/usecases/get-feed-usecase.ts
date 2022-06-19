import { GetFeedDatabase } from '../../data/get-feed-db'
import { BadRequest } from '../../errors/BadRequest'
import { Post } from '../../model/Post'

export class GetFeedUseCase {
  constructor(private readonly getFeedDatabase: GetFeedDatabase) {}

  async execute(user_id: string): Promise<Post[]> {
    try {
      if (!user_id) {
        throw new BadRequest()
      }

      const posts: Post[] = await this.getFeedDatabase.get(user_id)
      return posts
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)
    }
  }
}
