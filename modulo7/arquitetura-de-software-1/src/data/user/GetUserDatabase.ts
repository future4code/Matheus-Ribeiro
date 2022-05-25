import { BaseDatabase } from '../connection/BaseDatabase'

export type User = {
  id: string
  name: string
  email: string
  password: string
}

export interface GetUserDatabase extends BaseDatabase {
  get(): Promise<User[]>
}
