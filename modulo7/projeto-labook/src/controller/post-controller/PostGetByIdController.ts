import { Request, Response } from 'express'
import { PostGetByIdBusiness } from '../../business/post-business/PostGetByIdBusiness'
import { CustomError } from '../../errors/CustomError'
import { PostNotFound } from '../../errors/PostNotFound'
import { PostDTO } from '../../models/post/PostDTO'

export class PostGetByIdController {
  constructor(private postGetByIdBusiness: PostGetByIdBusiness) {}
  public async get(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params
      const post: PostDTO = await this.postGetByIdBusiness.execute(id)

      res.status(200).send(post)
    } catch (error: any) {
      if (error instanceof CustomError) { 
        res.status(error.statusCode).send(error.message)
      }
      res.status(400).send(error.sqlMessage || error.message)
    }
  }
}
