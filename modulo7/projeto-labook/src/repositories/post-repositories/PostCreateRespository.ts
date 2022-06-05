import { PostDTO } from "../../models/post/PostDTO";

export interface PostCreateRepository {
    create(data: PostDTO): Promise<void>
}
