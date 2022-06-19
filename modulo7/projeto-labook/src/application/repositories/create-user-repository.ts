import { User } from "../../model/User"

export interface CreateUserResquestDTO {
    name: string
    email: string
    password: string
}

export interface CreateUserRepository {
    create({name, email, password}: CreateUserResquestDTO): Promise<void>
    findByEmail(email: string): Promise<User | undefined>
}
