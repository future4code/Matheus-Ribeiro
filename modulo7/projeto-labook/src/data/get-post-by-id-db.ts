import {
  GetPostByIdRepository
} from "../application/repositories/get-post-by-id-repository";
import { Post } from "../model/Post";
import { ConnectionDatabase } from "./connection-db";

export class GetPostByIdDatabase
  extends ConnectionDatabase
  implements GetPostByIdRepository
{
  async getById(id: string): Promise<Post | any> {
    const post: Post | any = await GetPostByIdDatabase.connection(
      "labook_posts"
    )
      .select("*")
      .where({ id });

    return post[0];
  }
}
