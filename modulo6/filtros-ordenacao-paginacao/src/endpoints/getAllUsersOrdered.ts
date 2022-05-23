import { Request, Response } from "express"
import { connection } from "../data/connection"

export default async function selectAllUsers(sort: string): Promise<any> {
    const result = await connection("aula48_exercicio")
        .orderBy(sort, "ASC")

    return result
}

export const getAllUsersOrdered = async (req: Request, res: Response): Promise<void> => {
    try {
       
        let sort = req.query.sort as string
  

        if(sort !== "name" && sort !== "type" || !sort) {
            sort = "email"
        }

        const users = await selectAllUsers(sort)

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