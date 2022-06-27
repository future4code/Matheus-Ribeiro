import express from 'express'
import { AddUserUseCase } from '../application/usecases/add-user-usecase'
import { GetOwnProfileUseCase } from '../application/usecases/get-own-profile-usecase'
import { GetUserProfileUseCase } from '../application/usecases/get-user-profile-usecase'
import { LoginUseCase } from '../application/usecases/login-usecase'
import { AddUserController } from '../controllers/add-user-controller'
import { GetOwnProfileController } from '../controllers/get-own-profile-controller'
import { GetUserProfileController } from '../controllers/get-user-profile-controller'
import { LoginController } from '../controllers/login-controller'
import { AddUserDatabase } from '../data/add-user-db'
import { GetOwnProfileDatabase } from '../data/get-own-profile-db'
import { GetUserProfileDatabase } from '../data/get-user-profile-db'
import { LoginDatabase } from '../data/login-db'
import { Authentication } from '../services/authenticaton'
import { HashManager } from '../services/hash-manager'

export const userRouter = express.Router()

const hashManager = new HashManager()
const authentication = new Authentication()
const getOwnProfileDatabase = new GetOwnProfileDatabase()

userRouter.post('/signup', (req, res) => {
  const addUserDatabase = new AddUserDatabase()
  const addUserUseCase = new AddUserUseCase(addUserDatabase, hashManager, authentication)
  const addUserController = new AddUserController(addUserUseCase)

  addUserController.add(req, res)
})

userRouter.post('/login', (req, res) => {
  const loginDatabase = new LoginDatabase()
  const loginUseCase = new LoginUseCase(loginDatabase, hashManager, authentication)
  const loginController = new LoginController(loginUseCase)

  loginController.login(req, res)
})

userRouter.get('/profile', (req, res) => {
  const getOwnProfileDatabase = new GetOwnProfileDatabase()
  const getOwnProfileUseCase = new GetOwnProfileUseCase(getOwnProfileDatabase, authentication)
  const getOwnProfileController = new GetOwnProfileController(getOwnProfileUseCase)

  getOwnProfileController.get(req, res)
})

userRouter.get('/:id', (req, res) => {
  const getUserProfileDatabase = new GetUserProfileDatabase()
  const getUserProfileUseCase = new GetUserProfileUseCase(
    getUserProfileDatabase,
    authentication,
    getOwnProfileDatabase
  )
  const getUserProfileController = new GetUserProfileController(getUserProfileUseCase)

  getUserProfileController.get(req, res)
})
