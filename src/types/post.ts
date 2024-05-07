export interface Author {
  name: string
  title: string
  profileUrl: string
  avatar: string
}

export interface Post {
  id: number | string
  description: string
  slug: string
  title: string
  image?: string
  author?: Author
  tagList: string[]
  mdContent?: string
  htmlContent?: string
}
