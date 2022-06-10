import { CreatePostRepository } from "../application/repositories/create-post-repository";
import { Post } from "../model/Post";
import { ConnectionDatabase } from "./connection-db";

export class CreatePostDatabase extends ConnectionDatabase implements CreatePostRepository {
    async create({ id, photo, description, type, creation_date, id_user }: Post): Promise<void> {
        const post: Post = {
            id,
            photo,
            description,
            type,
            creation_date,
            id_user
        }
        await CreatePostDatabase.connection("labook_posts").insert(post);
    }
}