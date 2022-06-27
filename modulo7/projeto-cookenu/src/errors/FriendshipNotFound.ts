import { CustomError } from './CustomError'

export class FriendshipNotFound extends CustomError {
  constructor() {
    super('Friendship not found', 400)
  }
}