import { User } from "../../model/User";

export interface GetOwnProfileRepository { 
    get(id: string): Promise<User>
}