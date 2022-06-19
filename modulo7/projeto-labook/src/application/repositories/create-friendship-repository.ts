import { Friendship } from "../../model/Friendship";

export interface CreateFriendshipRequestDTO {
    user_id: string
    friend_id: string
}

export interface CreateFriendshipRepository {
    create(friendship: CreateFriendshipRequestDTO): Promise<void>;
    find(friendship: CreateFriendshipRequestDTO): Promise<Friendship[]>;
}