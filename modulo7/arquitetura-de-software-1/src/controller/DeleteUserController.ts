import { Request, Response } from "express"
import { DeleteUserBusiness } from "../business/DeleteUserBusiness"
import { KnexDeleteUserDatabase } from "../data/knex/user/KnexDeleteUserDatabase"

export const deleteUserController = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params

    const knexDeleteUserDatabase = new KnexDeleteUserDatabase()
    const deleteUserBusiness = new DeleteUserBusiness(knexDeleteUserDatabase)

    await deleteUserBusiness.execute({id})

    return res.status(201).send({ message: 'Usuário deletado!' })
  } catch (error: any) {
    res.status(400).send(error.message)
  }
}
