import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Post } from '@/types/post'

const BLOG_FOLDER = path.join(process.cwd(), 'src/markdown')

export default async function getPostList(): Promise<Post[]> {
  const fileNameList = fs.readdirSync(BLOG_FOLDER)

  const postList: Post[] = []

  for (const fileName of fileNameList) {
    const filePath = path.join(BLOG_FOLDER, fileName)
    const fileContents = fs.readFileSync(filePath, 'utf-8')

    const { data, excerpt, content } = matter(fileContents, {
      excerpt_separator: '<!-- truncate-->',
    })

    postList.push({
      id: fileName,
      slug: data.slug,
      title: data.title,
      image: data.image,
      author: {
        name: data.author,
        title: data.author_tittle,
        avatar: data.author_url,
        profileUrl: data.author_image_url,
      },
      tagList: data.tags,
      description: excerpt || '',
      mdContent: content,
    })
  }

  return postList
}
