import { Request, Response } from "express"
import selectAllProducts from "../services/selectAllProducts"

export async function getAllProducts(req: Request, res: Response): Promise<void> {
    try {
        const products = await selectAllProducts()
        res.status(200).send(products)
    }
    catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
}