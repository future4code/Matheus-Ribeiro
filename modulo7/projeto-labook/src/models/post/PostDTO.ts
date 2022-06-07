import { POST_TYPES } from "./PostCreateRequestDTO"

export interface PostDTO { 
    id: string
    photo: string
    description: string
    type: POST_TYPES
    creation_date: Date
    user_id: string
}