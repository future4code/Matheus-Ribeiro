import express from "express";
import { CreateFriendshipUseCase } from "../application/usecases/create-friendship-usecase";
import { CreateUserUseCase } from "../application/usecases/create-user-usecase";
import { DeleteFriendshipUseCase } from "../application/usecases/delete-friendship-usecase";
import { GetFeedUseCase } from "../application/usecases/get-feed-usecase";
import { CreateFriendshipController } from "../controllers/create-friendship-controller";
import { CreateUserController } from "../controllers/create-user-controller";
import { DeleteFriendshipController } from "../controllers/delete-friendship-controller";
import { GetFeedController } from "../controllers/get-feed-controller";
import { CreateFriendshipDatabase } from "../data/create-friendship-db";
import { CreateUserDatabase } from "../data/create-user-db";
import { DeleteFriendshipDatabase } from "../data/delete-friendship-db";
import { GetFeedDatabase } from "../data/get-feed-db";

export const userRouter = express.Router();

userRouter.post("/create", (req, res) => {
  const createUserDatabase = new CreateUserDatabase();
  const createUserUseCase = new CreateUserUseCase(createUserDatabase);
  const createUserController = new CreateUserController(createUserUseCase);

  createUserController.create(req, res);
});

userRouter.post("/friendship", (req, res) => {
  const createFriendshipDatabase = new CreateFriendshipDatabase();
  const createFriendshipUseCase = new CreateFriendshipUseCase(
    createFriendshipDatabase
  );
  const createFriendshipController = new CreateFriendshipController(
    createFriendshipUseCase
  );

  createFriendshipController.create(req, res);
});

userRouter.delete('/friendship', (req, res) => {
  const deleteFriendshipDatabase = new DeleteFriendshipDatabase()
  const deleteFriendshipUseCase = new DeleteFriendshipUseCase(deleteFriendshipDatabase)
  const deleteFriendshipController = new DeleteFriendshipController(deleteFriendshipUseCase)

  deleteFriendshipController.delete(req, res)
})
