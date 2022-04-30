import { Request, Response } from "express"
import registerPurchases from "../services/registerPurchase"

export const postPurchases = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId, productId, quantity } = req.body

        if (!userId || !productId || !quantity) {
            res.statusCode = 422
            throw new Error("Please check inputs. Missing values.")
        }

        if (quantity < 1 || isNaN(Number(quantity))) {
            res.statusCode = 422
            throw new Error("Please check inputs. Quantity must be a number greater than 0.")
        }
        
        await registerPurchases(userId, productId, quantity)
        
        res.status(201).send("Purchase registered successfully.")
    } catch (error: any) {
        res.status(res.statusCode).send(error.message || error.sqlMessage)
    }
}
