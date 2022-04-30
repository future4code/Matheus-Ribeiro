import { Request, Response } from "express"
import selectAllUsers from "../services/selectAllUsers"

export async function getAllUsers(req: Request, res: Response): Promise<void> {
    try {
        const users = await selectAllUsers()
        
        res.status(200).send(users)
    }
    catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
}

