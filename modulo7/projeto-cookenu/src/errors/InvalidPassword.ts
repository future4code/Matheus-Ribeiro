import { CustomError } from './CustomError'

export class InvalidPassword extends CustomError {
  constructor() {
    super('Password must be at least 8 characters', 400)
  }
}
