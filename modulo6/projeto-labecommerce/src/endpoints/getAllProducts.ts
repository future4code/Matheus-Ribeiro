import { Request, Response } from "express"
import selectAllProducts from "../services/selectAllProducts"
import { Product } from "../types"

export async function getAllProducts(req: Request, res: Response): Promise<void> {
    try {
        const products: Product[] = await selectAllProducts()
        res.status(200).send(products)
    }
    catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
}