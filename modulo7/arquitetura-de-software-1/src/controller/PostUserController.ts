import { Request, Response } from 'express'
import { CreateUserBusiness } from '../business/CreateUserBusiness'
import { KnexCreateUserDatabase } from '../data/knex/user/KnexCreateUserDatabase'

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body

    const knexCreateUserDatabase = new KnexCreateUserDatabase()
    const createUserBusiness = new CreateUserBusiness(knexCreateUserDatabase)

    await createUserBusiness.execute({
      name,
      email,
      password
    })

    return res.status(201).send({ message: 'Usuário criado!' })
  } catch (error: any) {
    res.status(400).send(error.message)
  }
}
