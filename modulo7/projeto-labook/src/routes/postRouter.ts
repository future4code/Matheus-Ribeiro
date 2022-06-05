import express from 'express'
import { PostCreateBusiness } from '../business/post-business/PostCreateBusiness'
import { PostCreateController } from '../controller/post/PostCreateController'
import { KnexPostCreateRepository } from '../repositories/knex-repositories/post/KnexPostCreateRepository'

export const postRouter = express.Router()

postRouter.post('/create', (req, res) => {
  const knexPostCreateRepository = new KnexPostCreateRepository()
  const postCreateBusiness = new PostCreateBusiness(knexPostCreateRepository)
  const postCreateController = new PostCreateController(postCreateBusiness)

  postCreateController.create(req, res)
})
