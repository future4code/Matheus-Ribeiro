import express from 'express'
import { UserCreateBusiness } from '../business/user-business/UserCreateBusiness'
import { UserCreateController } from '../controller/user-controller/UserCreateController'
import { KnexUserCreateRepository } from '../repositories/knex-repositories/user/KnexUserCreateRepository'

export const userRouter = express.Router()

userRouter.post('/create', (req, res) => {
  const knexUserCreateRepository = new KnexUserCreateRepository()
  const userCreateBusiness = new UserCreateBusiness(knexUserCreateRepository)
  const userCreateController = new UserCreateController(userCreateBusiness)

  userCreateController.create(req, res)
})
