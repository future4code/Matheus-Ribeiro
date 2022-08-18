import express from 'express'
import { app } from '../app'
import { AddRecipeUseCase } from '../application/usecases/add-recipe-usecase'
import { GetRecipeUseCase } from '../application/usecases/get-recipe-usecase'
import { AddRecipeController } from '../controllers/add-recipe-controller'
import { GetRecipeController } from '../controllers/get-recipe-controller'
import { AddRecipeDatabase } from '../data/add-recipe-db'
import { GetOwnProfileDatabase } from '../data/get-own-profile-db'
import { GetRecipeDatabase } from '../data/get-recipe-db'
import { Authentication } from '../services/authenticaton'

export const recipeRouter = express.Router()

const getOwnProfileDatabase = new GetOwnProfileDatabase()
const authentication = new Authentication()

recipeRouter.post('/', (req, res) => {
  const addRecipeDatabase = new AddRecipeDatabase()
  const addRecipeUseCase = new AddRecipeUseCase(
    addRecipeDatabase,
    authentication,
    getOwnProfileDatabase
  )
  const addRecipeController = new AddRecipeController(addRecipeUseCase)

  addRecipeController.add(req, res)
})

recipeRouter.get('/:id', (req, res) => {
  const getRecipeDatabase = new GetRecipeDatabase()
  const getRecipeUseCase = new GetRecipeUseCase(
    getRecipeDatabase,
    authentication,
    getOwnProfileDatabase
  )
  const getRecipeController = new GetRecipeController(getRecipeUseCase)

  getRecipeController.get(req, res)
})
