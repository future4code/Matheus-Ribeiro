export type UserData = {
  id: string
  name: string
  email: string
  password: string
}

export interface CreateUserDatabase {
  create(data: UserData): Promise<void>
}
