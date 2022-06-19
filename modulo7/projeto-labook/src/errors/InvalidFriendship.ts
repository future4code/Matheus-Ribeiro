import { CustomError } from './CustomError'

export class InvalidFriendship extends CustomError {
  constructor() {
    super('Already friends', 400)
  }
}