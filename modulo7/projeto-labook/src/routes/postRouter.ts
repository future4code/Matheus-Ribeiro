import express from 'express'
import { PostCreateBusiness } from '../business/post-business/PostCreateBusiness'
import { PostGetByIdBusiness } from '../business/post-business/PostGetByIdBusiness'
import { PostCreateController } from '../controller/post-controller/PostCreateController'
import { PostGetByIdController } from '../controller/post-controller/PostGetByIdController'
import { KnexPostCreateRepository } from '../repositories/knex-repositories/post/KnexPostCreateRepository'
import { KnexPostGetByIdRepository } from '../repositories/knex-repositories/post/KnexPostGetByIdRepository'

export const postRouter = express.Router()

postRouter.post('/create', (req, res) => {
  const knexPostCreateRepository = new KnexPostCreateRepository()
  const postCreateBusiness = new PostCreateBusiness(knexPostCreateRepository)
  const postCreateController = new PostCreateController(postCreateBusiness)

  postCreateController.create(req, res)
})

postRouter.get('/:id', (req, res) => { 
  const knexPostGetByIdRepository = new KnexPostGetByIdRepository()
  const postGetByIdBusiness = new PostGetByIdBusiness(knexPostGetByIdRepository)
  const postGetByIdController = new PostGetByIdController(postGetByIdBusiness)

  postGetByIdController.get(req, res)
})
