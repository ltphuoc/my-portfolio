import { Post } from '@/types/post'
import getPostList from '@/utils/posts'
import { Box, Link, Stack, Typography } from '@mui/material'
import NextLink from 'next/link'

export default async function Article() {
  const postList = await getPostList()

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" component="h1" fontWeight={700} mb={4}>
          Articles
        </Typography>
      </Stack>

      <Stack direction="column" spacing={4}>
        {postList.map((post: Post) => (
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 0, md: 10 }}
            key={post.id}
            alignItems={{ md: 'baseline' }}
            maxWidth={{ md: '80%', xs: '100%' }}
          >
            <Box sx={{ px: 3, py: { md: 3, xs: 0 } }}>
              <Typography variant="body2" color="grey">
                {new Date().toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </Typography>
            </Box>
            <Link
              component={NextLink}
              href={`/articles/${post.slug}`}
              underline="none"
              color="inherit"
              sx={{
                borderRadius: 2,
                flex: 1,
                textDecoration: 'none',
                p: 3,

                '&:hover': {
                  color: 'text.primary',
                  bgcolor: 'action.selected',
                },
              }}
            >
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  {post.title}
                </Typography>

                <Typography my={2} variant="body2">
                  {post.description}
                </Typography>

                <Typography variant="body2" color="primary.main">
                  Read article {'>'}
                </Typography>
              </Box>
            </Link>
          </Stack>
        ))}
      </Stack>
    </Box>
  )
}
