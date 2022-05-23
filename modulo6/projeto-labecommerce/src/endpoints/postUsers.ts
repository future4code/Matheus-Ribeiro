import { Request, Response } from "express"
import { transporter } from "../data/transporter"
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

        await transporter.sendMail({
            from: `${process.env.NODEMAILER_USER}`,
            to: `${email}`,
            subject: "Welcome to LabeCommerce!",
            text: `Welcome to LabeCommerce, ${name}!`,
            html: [
                `<div>`,
                `<h1>Welcome to LabeCommerce, ${name}!</h1>`,
                `<p> You can now login to LabeCommerce with the following credentials: </p>`,
                `<span>Email: ${email}</span>`,
                `<span>Password: ${password}</span>`,
                `<p>You can now start shopping!</p>`,
                `</div>`,
            ].join("\n")
        })

        res.status(201).send("User created successfully.")
    } catch (error: any) {
        res.status(res.statusCode).send(error.sqlMessage || error.message)
    }
}
