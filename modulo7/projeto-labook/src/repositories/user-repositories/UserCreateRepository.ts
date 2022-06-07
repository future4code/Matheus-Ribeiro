import { UserCreateRequestDTO } from "../../models/user/UserCreateRequestDTO";

export interface UserCreateRepository {
  create(data: UserCreateRequestDTO): Promise<void>
  find(email: string): Promise<string>
}
