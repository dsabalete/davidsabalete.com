export interface BlogPost {
  title?: string
  description?: string
  path?: string
  _path?: string
  stem?: string
  id?: string
  meta?: {
    title?: string
    description?: string
    createdAt?: string
    updatedAt?: string
    img?: string
    alt?: string
    [key: string]: unknown
  }
  [key: string]: unknown
}

