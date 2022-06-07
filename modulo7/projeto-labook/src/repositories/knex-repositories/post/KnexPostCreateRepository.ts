import { PostDTO } from '../../../models/post/PostDTO'
import { PostCreateRepository } from '../../post-repositories/PostCreateRespository'
import { KnexDatabase } from '../KnexDatabase'

export class KnexPostCreateRepository extends KnexDatabase implements PostCreateRepository {
  public async create(data: PostDTO): Promise<void> {
    try {
      await KnexPostCreateRepository.connection('labook_posts').insert({
        id: data.id,
        photo: data.photo,
        description: data.description,
        creation_date: data.creation_date,
        type: data.type,
        id_user: data.user_id
      })
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}
