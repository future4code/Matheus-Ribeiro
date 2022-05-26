import { User } from "./GetUserDatabase"

export interface DeleteUserDatabase {
    delete(id: string): Promise<void>
    search(id: string): Promise<User[]>
    
}
