import { User } from '../../model/User'

export interface AddUserResquestDTO {
  name: string
  email: string
  password: string
}

export interface AddUserRepository {
  add({ name, email, password }: AddUserResquestDTO): Promise<void>
  findByEmail(email: string): Promise<User>
}
