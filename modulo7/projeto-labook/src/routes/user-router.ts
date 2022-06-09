import express from 'express'
import { CreateUserUseCase } from '../application/usecases/create-user-usecase'
import { CreateUserController } from '../controllers/create-user-controller'
import { CreateUserDatabase } from '../data/create-user-db'

export const userRouter = express.Router()

userRouter.post('/create', (req, res) => {
    const createUserDatabase = new CreateUserDatabase()
    const createUserUseCase = new CreateUserUseCase(createUserDatabase)
    const createUserController = new CreateUserController(createUserUseCase)

    return createUserController.create(req, res)
})