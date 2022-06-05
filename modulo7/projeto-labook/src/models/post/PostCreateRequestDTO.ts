export enum POST_TYPES {
  NORMAL = 'normal',
  EVENT = 'event'
}

export interface PostCreateRequestDTO {
  photo: string
  description: string
  type: POST_TYPES
  creationDate: Date
  authorId: string
}
