import express, { Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { UserAccount } from "./classes/UserAccout"

export const app = express()

app.use(express.json())
app.use(cors())

app.get("/class", async (req: Request, res: Response) => {
    const  newUser: UserAccount = new UserAccount("33244322212", "Matheus", 27)

    res.status(200).json(newUser)
})

app.post("/user", async (req: Request, res: Response) => {
    try {
        
    } catch (error: any) {
        
    }
})

const server = app.listen(3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})
