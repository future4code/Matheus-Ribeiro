import { PostDTO } from '../../../models/post/PostDTO'
import { PostGetByIdRepository } from '../../post-repositories/PostGetByIdRepository'
import { KnexDatabase } from '../KnexDatabase'

export class KnexPostGetByIdRepository extends KnexDatabase implements PostGetByIdRepository {
  public async get(id: string): Promise<PostDTO> {
    try {
      const result = await KnexPostGetByIdRepository.connection('labook_posts')
        .where({ id: id })
        .select('*')
      
      const post: PostDTO = {
        id: result[0].id,
        photo: result[0].photo,
        description: result[0].description,
        creationDate: result[0].creation_date,
        type: result[0].type,
        authorId: result[0].id_user
      }
      
      return post
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}
