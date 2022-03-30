type Users = {
  id: number | string
  name: string
  phone: string
  email: string
  website: string
}

type Post = {
  id: number | string
  title: string
  body: string
  userId: number | string
}

export const users: Users[] = [
  {
    id: 1,
    name: "Matheus",
    phone: "(18) 99654-9147",
    email: "matheuslimaribeiro15@outlook.com",
    website: "www.matheus.com.br",
  },
  {
    id: 2,
    name: "Beatriz",
    phone: "(18) 99664-4112",
    email: "beatfraga@outlook.com",
    website: "www.beatriz.com.br",
  },
  {
    id: 3,
    name: "Rengar",
    phone: "(18) 99664-1323",
    email: "rengar@outlook.com",
    website: "www.rengar.com.br",
  },
]

export const posts: Post[] = [
  {
    id: 1,
    title: "Emprego novo!",
    body: "Comecei um emprego novo como Desenvolvedor Front-End Jr.",
    userId: 1,
  },
  {
    id: 2,
    title: "Roupa nova!",
    body: "Comprei um vestido novo! estou apaixonada por ele.",
    userId: 2,
  },
  {
    id: 3,
    title: "Ganhei um sachê whiskas!",
    body: "Hoje meu humano me deu um sachê whiskas de salmão delicoso.",
    userId: 3,
  },
]
