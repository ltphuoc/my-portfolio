import getPostList from '@/utils/posts'
import { Box, Typography } from '@mui/material'
import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

export async function generateStaticParams() {
  const posts = await getPostList()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  const posts = await getPostList()
  const post = posts.find((x) => x.slug === params.slug)

  return {
    title: post?.title,
  }
}

type Props = {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  const { slug } = params
  if (!slug) notFound()

  const posts = await getPostList()
  const post = posts.find((x) => x.slug === slug)

  if (!post) notFound()

  const file = await unified()
    .use(remarkParse)
    // .use(remarkToc, { heading: 'agenda.*' })
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
    .use(rehypePrism, { showLineNumbers: false })
    .use(rehypeDocument, { title: 'Blog details page' })
    .use(rehypeFormat)
    .use(rehypeStringify)

    .process(post.mdContent || '')

  post.htmlContent = file.toString()

  return (
    <Box>
      <Typography variant="h3" component="h1" fontWeight={700}>
        {post.title}
      </Typography>

      <div dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }} />

      <Script src="/prism.js" strategy="afterInteractive"></Script>
    </Box>
  )
}
