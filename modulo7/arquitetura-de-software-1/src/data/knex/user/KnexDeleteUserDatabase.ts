import { BaseDatabase } from "../../connection/BaseDatabase"
import { DeleteUserDatabase } from "../../user/DeleteUserDatabase"
import { User } from "../../user/GetUserDatabase"

export class KnexDeleteUserDatabase extends BaseDatabase implements DeleteUserDatabase {
    async search(id: string): Promise<User[]> { 
        const result = await BaseDatabase.connection('User_Arq').where({ id }).select('*')
        return result
    }
    
    async delete(id: string): Promise<void> {
        await BaseDatabase.connection('User_Arq').where({ id }).delete()
    }
}