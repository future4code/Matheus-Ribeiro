import { Request, Response } from 'express'
import { PostGetByIdBusiness } from '../../business/post-business/PostGetByIdBusiness'
import { PostDTO } from '../../models/post/PostDTO'

export class PostGetByIdController {
  constructor(private postGetByIdBusiness: PostGetByIdBusiness) {}
  public async get(req: Request, res: Response): Promise<any>{
    try {
      const id: string = req.params.id
      const post: PostDTO = await this.postGetByIdBusiness.execute(id)
      
      if (!post) {
        throw new Error('Post not found')
      }
      
     res.status(200).send(post)
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}
