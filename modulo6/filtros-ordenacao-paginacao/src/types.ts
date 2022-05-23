export type Recipe = {
   id: string
   title: string
   description: string
   userId: string
   createdAt: number
}

export type User = {
   id: string
   name: string
   email: string
   password: string
   recipes?: Recipe[]
}