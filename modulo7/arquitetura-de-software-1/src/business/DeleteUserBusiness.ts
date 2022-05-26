import { DeleteUserDatabase } from '../data/user/DeleteUserDatabase'

export type DeleteUserData = {
  id: string
}

export class DeleteUserBusiness {
  constructor(private readonly deleteUserDatabase: DeleteUserDatabase) {}
  public execute = async (request: DeleteUserData): Promise<void> => {
    try {
      const { id } = request

      const user = await this.deleteUserDatabase.search(id)

      if (!user[0]) {
        throw new Error('Usuário não encontrado')
      }

      await this.deleteUserDatabase.delete(id)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
