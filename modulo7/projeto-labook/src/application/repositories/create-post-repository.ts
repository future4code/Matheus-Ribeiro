export interface CreatePostRequestDTO {
    photo: string;
    description: string;
    type?: string;
    id_user: string;
}

export interface CreatePostRepository {
    create(post: CreatePostRequestDTO): Promise<void>
}