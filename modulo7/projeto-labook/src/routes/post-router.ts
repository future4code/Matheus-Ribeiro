import express from 'express'
import { CreatePostUseCase } from '../application/usecases/create-post-usecase'
import { GetPostByIdUseCase } from '../application/usecases/get-post-by-id-usecase'
import { CreatePostController } from '../controllers/create-post-controller'
import { GetPostByIdController } from '../controllers/get-post-by-id-controller'
import { CreatePostDatabase } from '../data/create-post-db'
import { GetPostByIdDatabase } from '../data/get-post-by-id-db'


export const postRouter = express.Router()

postRouter.post('/create', (req, res) => {
    const createPostDatabase = new CreatePostDatabase()
    const createPostUsecase = new CreatePostUseCase(createPostDatabase)
    const createPostController = new CreatePostController(createPostUsecase)

    createPostController.create(req, res)
})

postRouter.get('/:id', (req, res) => { 
    const getPostByIdDatabase = new GetPostByIdDatabase()
    const getPostByIdUseCase = new GetPostByIdUseCase(getPostByIdDatabase)
    const getPostByIdController = new GetPostByIdController(getPostByIdUseCase)

    getPostByIdController.getById(req, res)
})
