import { Request, Response } from "express"
import { connection } from "../data/connection"

export default async function selectAllUsers(
    search: string,
    filter: string,
    sort: string,
    page: number,
    order?: string
): Promise<any> {
    let size = 5
    let offset = size * (page - 1)

    const result = await connection("aula48_exercicio").select()
        .where(filter, "like", `%${search}%`)
        .orderBy(sort, order)
        .limit(size)
        .offset(offset)

    return result
}

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        let name = req.query.name as string
        let sort = req.query.sort as string
        let page = Number(req.query.page)
        let type = req.query.type as string
        let filter = "name"
        let search = "%"
        let order

        if(page < 1 || isNaN(page)){
            page = 1;
        }

         if (name) {
            search = name
        }

        if (type) {
            filter = "type"
            search = type
        }
        
        if (!name) {
            name = "%"
        }

        if (!type) {
            type = "%"
        }

        if ((sort !== "name" && sort !== "type") || !sort) {
            sort = "name"
            order = "DESC"
        }

        const users = await selectAllUsers(search, filter, sort, page, order)

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
