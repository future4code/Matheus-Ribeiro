import { Post } from "../../model/Post";

export interface GetFeedRepository { 
    get(user_id: string): Promise<Post[]>;
}