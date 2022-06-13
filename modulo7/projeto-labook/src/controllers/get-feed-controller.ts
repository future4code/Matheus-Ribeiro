import { Request, Response } from 'express'
import { GetFeedUseCase } from '../application/usecases/get-feed-usecase'
import { Post } from '../model/Post'

export class GetFeedController {
  constructor(private getFeedUsecase: GetFeedUseCase) {}

  async get(req: Request, res: Response): Promise<any> {
    try {
      const { user_id } = req.body

      const posts: Post[] = await this.getFeedUsecase.execute(user_id)

      res.status(200).send(posts)
    } catch (error: any) {
      res.status(400).send(error.message || error.sqlMessage)
    }
  }
}
