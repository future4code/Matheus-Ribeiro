import { CustomError } from './CustomError'

export class InvalidEmail extends CustomError {
  constructor() {
    super('Invalid email', 400)
  }
}
