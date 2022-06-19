import { Request, Response } from "express";
import { CreatePostRequestDTO } from "../application/repositories/create-post-repository";
import { CreatePostUseCase } from "../application/usecases/create-post-usecase";

export class CreatePostController {
  constructor(private createPostUsecase: CreatePostUseCase) {}
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { photo, description, type } = req.body;
      const id_user = req.headers.authorization as string;

      const post: CreatePostRequestDTO = {
        photo,
        description,
        type,
        id_user,
      };
      await this.createPostUsecase.execute(post);
      res.status(201).send({ message: "Post created with success" });
    } catch (error: any) {
      res.status(400).send(error.message || error.sqlMessage);
    }
  }
}
