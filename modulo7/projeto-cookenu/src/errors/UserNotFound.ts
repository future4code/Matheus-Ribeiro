import { CustomError } from './CustomError'

export class UserNotFound extends CustomError {
  constructor() {
    super('User not found.', 400)
  }
}
