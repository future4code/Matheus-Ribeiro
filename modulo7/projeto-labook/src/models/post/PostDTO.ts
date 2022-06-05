import { POST_TYPES } from "./PostCreateRequestDTO"

export interface PostDTO { 
    id: string
    photo: string
    description: string
    type: POST_TYPES
    creationDate: Date
    authorId: string
}