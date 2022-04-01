import express, { Request, Response } from "express"
import cors from "cors"
import { tasks } from "./data"
import { v4 as generateId } from "uuid"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/ping", (request: Request, response: Response) => {
  response.send("Pong!🏓")
})

app.post("/todos/create", (request: Request, response: Response) => {
  const userId = Number(request.headers.authorization)
  const title: string = request.body.title

  if (!userId) response.status(400).send("Usuário sem autorização.")

  const newTask = {
    userId: userId,
    id: generateId(),
    title: title,
    completed: false,
  }

  tasks.push(newTask)
  response.status(200).send(tasks)
})

app.get("/todos/:completed", (request: Request, response: Response) => {
  const completed = request.params.completed

  if (
    completed.toLowerCase() !== "true" &&
    completed.toLowerCase() !== "false"
  ) {
    response.status(400).send("Parâmetros inválidos")
  } else {
    const filterTasks = tasks.filter((task) => {
      if (completed.toLowerCase() === "true") {
        return task.completed === true
      } else {
        completed.toLowerCase() === "false"
      }
      return task.completed === false
    })
    response.status(200).send(filterTasks)
  }
})

app.listen(3003, () => {
  console.log("Servidor online...")
})
