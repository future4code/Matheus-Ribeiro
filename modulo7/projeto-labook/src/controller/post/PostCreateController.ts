import { Request, Response } from 'express'
import { PostCreateBusiness } from '../../business/post-business/PostCreateBusiness'
import { PostCreateRequestDTO } from '../../models/post/PostCreateRequestDTO'

export class PostCreateController {
  constructor(private postCreateBusiness: PostCreateBusiness) {}
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const { photo, description, type, authorId } = req.body
      const post: PostCreateRequestDTO = {
        photo,
        description,
        type,
        authorId
      }
      await this.postCreateBusiness.execute(post)
      res.status(200).send({ message: 'Post created' })
    } catch (error: any) {}
  }
}
