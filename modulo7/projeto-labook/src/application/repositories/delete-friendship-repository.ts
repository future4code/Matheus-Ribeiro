import { Friendship } from "../../model/Friendship";

export interface DeleteFriendshipRequestDTO {
    user_id: string
    friend_id: string
}

export interface DeleteFriendshipRepository {
    delete(friendship: DeleteFriendshipRequestDTO): Promise<void>;
    find(friendship: DeleteFriendshipRequestDTO): Promise<Friendship[]>;
}