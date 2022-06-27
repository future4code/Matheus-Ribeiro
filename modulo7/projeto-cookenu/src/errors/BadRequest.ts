import { CustomError } from './CustomError'

export class BadRequest extends CustomError {
  constructor() {
    super('Missing parameters', 400)
  }
}
