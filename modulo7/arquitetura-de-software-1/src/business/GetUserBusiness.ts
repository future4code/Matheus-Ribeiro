import { GetUserDatabase } from '../data/GetUserDatabase'

export class GetUserBusiness {
  public getUsers = async () => {
    try {
      const userDatabase = new GetUserDatabase()
      return await userDatabase.getAllUsers()
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
