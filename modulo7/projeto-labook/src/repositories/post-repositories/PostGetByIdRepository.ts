import { PostDTO } from '../../models/post/PostDTO'

export interface PostGetByIdRepository {
  get(id: string): Promise<PostDTO>
}
