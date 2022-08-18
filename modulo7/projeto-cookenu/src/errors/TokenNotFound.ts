import { CustomError } from './CustomError'

export class TokenNotFound extends CustomError {
  constructor() {
    super('Missing authorization token', 404)
  }
}
