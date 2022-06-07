import { PostCreateRequestDTO } from "../../models/post/PostCreateRequestDTO";
import { PostDTO } from "../../models/post/PostDTO";
import { PostCreateRepository } from "../../repositories/post-repositories/PostCreateRespository";
import { generateId } from "../../services/generateId";

export class PostCreateBusiness {
    constructor(private postCreateRepository: PostCreateRepository) { }
    public async execute(data: PostCreateRequestDTO): Promise<void> {
        try {
            const post: PostDTO = {
                id: generateId(),
                photo: data.photo,
                description: data.description,
                creation_date: new Date(Date.now()),
                type: data.type,
                user_id: data.authorId
            }
            await this.postCreateRepository.create(post);
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}