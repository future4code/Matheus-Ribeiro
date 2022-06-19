import express from "express";

import { UserController } from "../controller/UserController";

export const userRouter = express.Router()

const userController = new UserController()

userRouter.get('/profile', userController.getUserData)
userRouter.post('/signup', userController.createUser)
userRouter.post('/login', userController.login)
userRouter.put('/edit',userController.editUser )
