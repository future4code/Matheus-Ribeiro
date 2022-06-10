import { Post } from "../../model/Post";


export interface GetPostByIdRepository {
    getById(id: string): Promise<Post | undefined>
}