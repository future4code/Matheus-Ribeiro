import { User } from "../../model/User";

export interface CreatePostRequestDTO {
    photo: string;
    description: string;
    type?: string;
    id_user: string;
}

export interface CreatePostRepository {
    create(post: CreatePostRequestDTO): Promise<void>
    findById(id: string): Promise<User | undefined>
}