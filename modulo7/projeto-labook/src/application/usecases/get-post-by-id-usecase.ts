import { GetPostByIdDatabase } from "../../data/get-post-by-id-db";
import { PostNotFound } from "../../errors/PostNotFound";
import { Post } from "../../model/Post";


export class GetPostByIdUseCase {
  constructor(private getPostByIdDatabase: GetPostByIdDatabase) {}

  async execute(id: string): Promise<Post | undefined> {
    try {
      const post: Post | any = await this.getPostByIdDatabase.getById(id);

      if (!post) {
        throw new PostNotFound();
      }

      return post;
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage);
    }
  }
}
