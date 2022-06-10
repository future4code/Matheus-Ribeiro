import { CreatePostDatabase } from "../../data/create-post-db";
import { BadRequest } from "../../errors/BadRequest";
import { Post } from "../../model/Post";
import { generateId } from "../../services/id-generate";
import { CreatePostRequestDTO } from "../repositories/create-post-repository";


export class CreatePostUseCase {
    constructor(private createPostDatabse: CreatePostDatabase) {}
    public async execute({photo, description, type, id_user}: CreatePostRequestDTO): Promise<void> {
        try {
            if (!photo || !description || !id_user) {
                throw new BadRequest()
            }

            const post: Post = {
                id: generateId(),
                photo,
                description,
                type,
                creation_date: new Date(),
                id_user
            }
            await this.createPostDatabse.create(post)
        }catch(error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    
    }
}