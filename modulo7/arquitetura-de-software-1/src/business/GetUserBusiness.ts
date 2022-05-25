import { GetUserDatabase } from '../data/user/GetUserDatabase'

export class GetUserBusiness {
  constructor(private readonly getUserDatabase: GetUserDatabase) {}
  public execute = async () => {
    try {
      const result =this.getUserDatabase.get()

      if (!result) {
        throw new Error('Não foi possível encontrar usuário')
      }

      return result
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
