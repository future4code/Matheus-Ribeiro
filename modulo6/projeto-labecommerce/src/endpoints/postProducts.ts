import { Request, Response } from "express"
import createProducts from "../services/createProducts"

export const postProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, price, imageUrl } = req.body

        if (!name || !price || !imageUrl) {
            res.statusCode = 422
            throw new Error("Please check inputs. Missing values.")
        }

        if (name.length < 3) {
            res.statusCode = 422
            throw new Error("Please check inputs. Name must be 3 characters.")
        }

        if (price < 1) {
            res.statusCode = 422
            throw new Error("Please check inputs. Price must be greater than 0.")
        }

        if (imageUrl.length < 3 || !imageUrl.includes(".") || !imageUrl.includes("/")) {
            res.statusCode = 422
            throw new Error("Please check inputs. ImageUrl must be a valid url.")
        }

        await createProducts(name, price, imageUrl)

        res.status(201).send("Product created successfully.")
    } catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
}
