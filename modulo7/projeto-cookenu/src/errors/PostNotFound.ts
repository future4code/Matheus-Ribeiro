import { CustomError } from './CustomError'

export class PostNotFound extends CustomError {
  constructor() {
    super('Post not found', 404)
  }
}
