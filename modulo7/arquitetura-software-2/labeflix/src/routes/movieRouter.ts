import express from 'express'
import { MovieController } from '../controller/MovieController'

export const movieRouter = express.Router()

const userController = new MovieController()

movieRouter.post('/create', userController.create)
