import express, { Request, Response } from "express"
import cors from "cors"
import { users, posts } from "./data"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (request: Request, response: Response) => {
  response.status(200).send("Sucesso!")
  console.log("Sucesso!")
})

app.get("/users", (request: Request, response: Response) => {
  response.status(200).send(users)
  console.log("Sucesso")
})

app.get("/posts", (request: Request, response: Response) => {
  response.status(200).send(posts)
  console.log("Sucesso")
})

app.get("/posts/:userId", (request: Request, response: Response) => {
  const userId = Number(request.params.userId)

  const postsByUser = posts.filter((post) => post.userId === userId)

  const findUser = posts.find((post) => {
    return userId === post.userId
  })

  if (!findUser) response.status(400).send("Usuário não existe")
  else response.status(200).send(postsByUser)
})

app.listen(3003, () => {
  console.log("Servidor online...")
})
