import express, { Express, Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import connection from "./connection"
import moment from "moment"
import { v4 as generateId } from "uuid"

const app: Express = express()
app.use(express.json())
app.use(cors())

app.post("/user", async (req: Request, res: Response): Promise<void> => {
    try {
        const userName: string = req.body.name
        const userNickName: string = req.body.nickname
        const userEmail: string = req.body.email

        if (!userName || !userNickName || !userEmail) {
            throw new Error("Insira todos os dados")
        }

        await connection("TodoListUser").insert({
            id: generateId(),
            name: userName,
            nickname: userNickName,
            email: userEmail,
        })

        res.status(201).send("Usuário criado com sucesso")
    } catch (error: any) {
        switch (error.message) {
            case "Insira todos os dados":
                res.status(400).send(error.message)
                break
            default:
                res.status(500).send(error.sqlMessage || error.message)
        }
    }
})

app.get("/user/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.params.id as string

        const response = await connection("TodoListUser").select().where("id", userId)

        if (!response.length) {
            throw new Error("Usuário não encontrado")
        }

        res.status(200).send(response)
    } catch (error: any) {
        switch (error.message) {
            case "Usuário não encontrado":
                res.status(400).send(error.message)
                break
            default:
                res.status(500).send(error.sqlMessage || error.message)
        }
    }
})

app.put("/user/edit/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.params.id as string
        const userName = req.body.name as string
        const userNickName = req.body.nickname as string

        if (!userName) {
            throw new Error("Insira o nome")
        }

        if (!userNickName) {
            throw new Error("Insira o nickname")
        }

        await connection("TodoListUser")
            .update({
                name: userName,
                nickname: userNickName,
            })
            .where("id", userId)

        res.status(201).send("Usuário editado com sucesso")
    } catch (error: any) {
        switch (error.message) {
            case "Insira o nome":
                res.status(400).send(error.message)
                break
            case "Insira o nickname":
                res.status(400).send(error.message)
                break
            case "Insira o email":
                res.status(400).send(error.message)
                break
            default:
                res.status(500).send(error.sqlMessage || error.message)
        }
    }
})

app.post("/task", async (req: Request, res: Response): Promise<void> => {
    try {
        const title = req.body.title as string
        const description = req.body.description as string
        const limitDate = req.body.limitDate as string
        const creatorUserId = req.body.creatorUserId as string

        const convertDate = limitDate.split("/").reverse().join("-")

        if (!title && !description && !limitDate) {
            throw new Error("Insira todos os dados")
        }

        await connection("TodoListTask").insert({
            id: generateId(),
            title: title,
            description: description,
            limit_date: convertDate,
            status: "to_do",
            creator_user_id: creatorUserId,
        })

        res.status(201).send("Tarefa criada com sucesso")
    } catch (error: any) {
        switch (error.message) {
            case "Insira todos os dados":
                res.status(400).send(error.message)
                break
            default:
                res.status(500).send(error.sqlMessage || error.message)
        }
    }
})

app.get("/task/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const taskId = req.params.id

        if (!taskId) {
            throw new Error("Insira o id da tarefa")
        }

        const response = await connection("TodoListTask").where("id", taskId)

        if (!response.length) {
            throw new Error("Tarefa não encontrada")
        }

        res.status(200).send(response)

    } catch (error: any) {
        switch (error.message) {
            case "Insira o id da tarefa":
                res.status(400).send(error.message)
                break

            default:
                res.status(500).send(error.sqlMessage || error.message)
        }
    }
})

const server = app.listen(process.env.PORT || 3306, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})
