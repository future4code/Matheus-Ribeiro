import { Request, Response } from "express";
import { GetPostByIdUseCase } from "../application/usecases/get-post-by-id-usecase";
import { Post } from "../model/Post";

export class GetPostByIdController {
  constructor(private readonly getPostByIdUseCase: GetPostByIdUseCase) {}

  async getById(req: Request, res: Response): Promise<Post | any> {
    try {
      const id = req.params.id;
      const post = await this.getPostByIdUseCase.execute(id);
      res.status(200).send(post);
    } catch (error: any) {
      res.status(400).send(
         error.message || error.sqlMessage,
      );
    }
  }
}
