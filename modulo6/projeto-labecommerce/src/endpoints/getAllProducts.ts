import { Request, Response } from "express"
import selectAllProducts from "../services/selectAllProducts"
import { Product } from "../types"

export async function getAllProducts(req: Request, res: Response): Promise<void> {
    try {
        const order = req.query.order as string
        const search = req.query.search as string || "%"

        const products: Product[] = await selectAllProducts(order, search)
        res.status(200).send(products)
    }
    catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
}