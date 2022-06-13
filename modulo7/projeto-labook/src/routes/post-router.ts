import express from "express";
import { CreatePostUseCase } from "../application/usecases/create-post-usecase";
import { GetFeedUseCase } from "../application/usecases/get-feed-usecase";
import { GetPostByIdUseCase } from "../application/usecases/get-post-by-id-usecase";
import { CreatePostController } from "../controllers/create-post-controller";
import { GetFeedController } from "../controllers/get-feed-controller";
import { GetPostByIdController } from "../controllers/get-post-by-id-controller";
import { CreatePostDatabase } from "../data/create-post-db";
import { GetFeedDatabase } from "../data/get-feed-db";
import { GetPostByIdDatabase } from "../data/get-post-by-id-db";

export const postRouter = express.Router();

postRouter.get("/feed", (req, res) => {
  const getFeedDatabase = new GetFeedDatabase();
  const getFeedUseCase = new GetFeedUseCase(getFeedDatabase);
  const getFeedController = new GetFeedController(getFeedUseCase);

  getFeedController.get(req, res);
});

postRouter.get("/:id", (req, res) => {
  const getPostByIdDatabase = new GetPostByIdDatabase();
  const getPostByIdUseCase = new GetPostByIdUseCase(getPostByIdDatabase);
  const getPostByIdController = new GetPostByIdController(getPostByIdUseCase);

  getPostByIdController.getById(req, res);
});

postRouter.post("/create", (req, res) => {
  const createPostDatabase = new CreatePostDatabase();
  const createPostUsecase = new CreatePostUseCase(createPostDatabase);
  const createPostController = new CreatePostController(createPostUsecase);

  createPostController.create(req, res);
});
