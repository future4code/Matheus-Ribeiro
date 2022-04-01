import express, { Request, Response } from "express"
import cors from "cors"
import { Task, tasks } from "./data"
import { v4 as generateId } from "uuid"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/ping", (request: Request, response: Response) => {
  response.send("Pong!🏓")
})

// Criar tarefas
app.post("/todos/create", (request: Request, response: Response) => {
  const userId = Number(request.headers.authorization)
  const title: string = request.body.title
  const completed: boolean = request.body.completed

  if (!userId) response.status(400).send("Usuário sem autorização.")

  const newTask = {
    userId: userId,
    id: generateId(),
    title: title,
    completed: completed,
  }

  tasks.push(newTask)
  response.status(200).send(tasks)
})

// Alterar status da tarefa
app.put("/todos/change/:taskId", (request: Request, response: Response) => {
  const userId = Number(request.headers.authorization)
  const taskId = request.params.taskId

  if (!userId) response.status(400).send("Usuário sem autorização.")

  const newTasks = tasks.map((task) => {
    if (taskId === task.id) {
      task.completed = !task.completed
      return task
    }
    return task
  })

  response.status(200).send(newTasks)
})

// Deletar tarefa
app.delete("/todos/delete/:taskId", (request: Request, response: Response) => {
  const taskId = request.params.taskId

  let findTask = tasks.findIndex((task) => taskId === task.id)

  if (findTask > -1) {
    tasks.splice(findTask, 1)
    response.status(200).send(tasks)
    findTask = -1
  } else {
    response.status(404).send("Task não existe")
  }
})

// Filtrar tarefas por usuário
app.get("/todos/user/:userId", (request: Request, response: Response) => {
  const userId = Number(request.params.userId)

  const findUser = tasks.find((task) => {
    return userId === task.userId
  })

  if (!findUser) response.status(404).send("Usuário não encontrado")

  type Todos = {
    selectedUser: Task[]
    others: Task[]
  }

  const tasksByUserId = tasks.filter((task) => {
    return task.userId === userId
  })

  const othersTasks = tasks.filter((task) => {
    return task.userId !== userId
  })

  const allTasks: Todos = {
    selectedUser: tasksByUserId,
    others: othersTasks,
  }

  response.status(200).send(allTasks)
})

// Filtrar tarefas por status
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
