import { User } from '../../model/User'

export interface LoginResquestDTO {
  email: string
  password: string
}

export interface LoginRepository {
  login(email: string): Promise<User>
}
