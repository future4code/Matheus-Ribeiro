import express, { Request, Response } from 'express'
import { UserCreateBusiness } from '../business/user-business/UserCreateBusiness'
import { UserCreateController } from '../controller/user-controller/UserCreateController'
import { KnexUserCreateRepository } from '../repositories/knex-repositories/user/KnexUserCreateRepository'

export const userRouter = express.Router()

userRouter.post('/create', async (req: Request, res: Response) => {
  const knexUserCreateRepository = new KnexUserCreateRepository()
  const userCreateBusiness = new UserCreateBusiness(knexUserCreateRepository)
  const userCreateController = new UserCreateController(userCreateBusiness)

  await userCreateController.create(req, res)
})
