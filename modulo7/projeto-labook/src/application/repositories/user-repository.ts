import { User } from "../../model/User"

export interface UserResquestDTO {
    name: string
    email: string
    password: string
}

export interface UserRepository {
    create({name, email, password}: UserResquestDTO): Promise<void>
    findByEmail(email: string): Promise<User | undefined>
}
