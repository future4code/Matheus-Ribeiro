export type Task = {
  userId: number | string
  id: number | string
  title: string
  completed: boolean
}

export const tasks: Task[] = [
  {
    userId: 1,
    id: "1",
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: "2",
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 2,
    id: "3",
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 2,
    id: "4",
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 3,
    id: "5",
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: true,
  },
  {
    userId: 3,
    id: "6",
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
]
