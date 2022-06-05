import { PostDTO } from '../../models/post/PostDTO'
import { PostGetByIdRepository } from '../../repositories/post-repositories/PostGetByIdRepository'

export class PostGetByIdBusiness {
  constructor(private postGetByIdRepository: PostGetByIdRepository) {}
  public async execute(id: string): Promise<PostDTO> {
    try {
      const post: PostDTO = await this.postGetByIdRepository.get(id)
      return post
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}
