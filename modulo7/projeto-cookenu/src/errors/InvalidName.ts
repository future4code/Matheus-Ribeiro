import { CustomError } from './CustomError'

export class InvalidName extends CustomError {
  constructor() {
    super('Invalid name', 400)
  }
}
