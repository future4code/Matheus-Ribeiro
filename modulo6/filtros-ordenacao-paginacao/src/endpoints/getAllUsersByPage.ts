import { Request, Response } from "express"
import { connection } from "../data/connection"

export default async function selectAllUsers(page: number): Promise<any> {
    let size = 5
    let offset = (page - 1) * size 

    const result = await connection("aula48_exercicio").select()
    .limit(size)
    .offset(offset)

    return result
}

export const getAllUsersByPage = async (req: Request, res: Response): Promise<void> => {
    try {
        let page = Number(req.query.page)

        if (isNaN(page) || page < 1) {
            page = 1;
        }

        const users = await selectAllUsers(page)

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
