import express, { Request, Response, Express, response } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { User, users, UserType } from "./data"
import { Errors } from "./errors"

const app: Express = express()
app.use(express.json())
app.use(cors())

// 1
// a) O método a ser utilizado é o get
// b) /users

// 2
// a) Por path variables, porque vai ser um parâmetro variável e o método get não aceita body

// 3
// a) Query params

// 4
// a) Não mudou nada
// b) Não, porque de acordo com as boas práticas o método PUT não é utilizado para criar um novo usuário. O método PUT é utilizado para alterar alguma coisa que já existe.

app.get("/users/:userType", (req: Request, res: Response) => {
    try {
        const userType: UserType = req.params.userType as UserType

        if (
            userType.toUpperCase() !== UserType.ADMIN &&
            userType.toUpperCase() !== UserType.NORMAL
        ) {
            throw new Error(Errors.INVALID_PARAMETERS.message)
        }

        const usersByType: User[] = users.filter(
            (user) => user.type === userType.toUpperCase()
        )

        res.status(200).send(usersByType)
    } catch (error: any) {
        res.status(Errors.INVALID_PARAMETERS.status).send(
            Errors.INVALID_PARAMETERS.message
        )
    }
})

app.get("/users", (req: Request, res: Response) => {
    try {
        const userName: string = req.query.userName as string

        const userFound: User | undefined = users.find(
            (user) => user.name.toLowerCase() === userName.toLowerCase()
        )

        if (!userFound) {
            throw new Error(Errors.USER_NOT_FOUND.message)
        }

        res.status(200).send(userFound)
    } catch (error: any) {
        res.status(Errors.USER_NOT_FOUND.status).send(
            Errors.USER_NOT_FOUND.message
        )
    }
})

app.put("/users", (req: Request, res: Response) => {
    try {
        const { name, email, type, age }: User = req.body

        if (!name || !email || !type || !age) {
            throw new Error(Errors.MISSING_PARAMETERS.message)
        }

        const newUser: User = {
            id: Math.round(Math.random() * (1000 - 10) + 10),
            name,
            email,
            type,
            age,
        }

        users.push(newUser)

        res.status(201).send(users)
    } catch (error: any) {
        res.status(Errors.MISSING_PARAMETERS.status).send(Errors.MISSING_PARAMETERS.message)
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})
