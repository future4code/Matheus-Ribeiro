import { Request, Response } from "express"
import selectPurchasesByUser from "../services/selectPurchasesByUser"

export default async function getAllPurchasesByUser (req: Request, res: Response): Promise<void> {
    try {
        const { userId } = req.params

        if (!userId) {
            res.statusCode = 422
            throw new Error("User id is required")
        }

        const result = await selectPurchasesByUser(userId)

        res.status(200).send(result)
    } catch (error: any) {
        res.status(res.statusCode).send(error.message || error.sqlMessage)
    }
}