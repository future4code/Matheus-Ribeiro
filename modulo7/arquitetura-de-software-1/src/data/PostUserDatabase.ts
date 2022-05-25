import { BaseDatabase } from './BaseDatabase'
import { User } from '../types/user'

export class PostUserDatabase extends BaseDatabase {
  public insertUser = async (user: User) => {
    await PostUserDatabase.connection
      .insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password
      })
      .into('User_Arq')
  }
}
