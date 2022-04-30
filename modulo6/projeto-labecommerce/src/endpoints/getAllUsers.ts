import { Request, Response } from "express"
import addPurchasesToUsers from "../services/addPurchasesToUsers"
import selectAllUsers from "../services/selectAllUsers"
import { User } from "../types"

export async function getAllUsers(req: Request, res: Response): Promise<void> {
    try {
        const users: User[] = await selectAllUsers().then(addPurchasesToUsers)

        res.status(200).send(users)
    } catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
}
