import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getUsersByType = async (req: Request, res: Response): Promise<void> => {
    try {
        const type = req.params.type as string

        if (!type) {
            res.statusCode = 400
            throw new Error("Type is required")
        }

        const users = await connection("aula48_exercicio").where("type", type)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No users found")
        }

        res.status(200).send(users)
    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}
