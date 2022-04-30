import { Request, Response } from "express"
import createUsers from "../services/createUsers"

export const postUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            res.statusCode = 422
            throw new Error("Please check inputs. Missing values.")
        }

        if (name.length < 3 || name.length > 20) {
            res.statusCode = 422
            throw new Error("Please check inputs. Name must be between 3 and 20 characters.")
        }

        if (email.length < 3 || !email.includes("@")) {
            res.statusCode = 422
            throw new Error(
                "Please check inputs. Email must be between 3 and 20 characters and must contain an @."
            )
        }

        if (password.length < 6) {
            res.statusCode = 422
            throw new Error("Please check inputs. Password must be at least 6 characters.")
        }

        await createUsers(name, email, password)

        res.status(201).send("User created successfully.")
    } catch (error: any) {
        res.status(res.statusCode).send(error.sqlMessage || error.message)
    }
}
