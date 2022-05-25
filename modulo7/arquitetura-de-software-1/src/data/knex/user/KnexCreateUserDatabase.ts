import { BaseDatabase } from "../../connection/BaseDatabase";
import { CreateUserDatabase, UserData } from "../../user/CreateUserDatabase";


export class KnexCreateUserDatabase extends BaseDatabase implements CreateUserDatabase { 
    async create(data: UserData): Promise<void> {
        await BaseDatabase.connection("User_Arq").insert({
            id: data.id,
            name: data.name,
            email: data.email,
            password: data.password
        })
    }
}