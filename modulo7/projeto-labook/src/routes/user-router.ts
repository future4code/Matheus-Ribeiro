import express from "express";
import { CreateFriendshipUseCase } from "../application/usecases/create-friendship-usecase";
import { CreateUserUseCase } from "../application/usecases/create-user-usecase";
import { CreateFriendshipController } from "../controllers/create-friendship-controller";
import { CreateUserController } from "../controllers/create-user-controller";
import { CreateFriendshipDatabase } from "../data/create-friendship-db";
import { CreateUserDatabase } from "../data/create-user-db";

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
