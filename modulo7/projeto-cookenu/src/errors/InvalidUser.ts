import { CustomError } from './CustomError'

export class InvalidUser extends CustomError {
  constructor() {
    super('User already exists', 400)
  }
}
