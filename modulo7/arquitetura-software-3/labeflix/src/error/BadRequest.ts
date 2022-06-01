import { CustomError } from './CustomError'

export class BadRequest extends CustomError {
  constructor() {
    super(400, 'Invalid Parameters')
  }
}
