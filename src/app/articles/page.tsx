import { Post } from '@/types/post'
import getPostList from '@/utils/posts'
import { Box, Card, CardContent, CardMedia, Grid, Link, Stack, Typography } from '@mui/material'
import NextLink from 'next/link'

export default async function Blog() {
  const postList = await getPostList()

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          variant="h4"
          component="h1"
          fontWeight={700}
          mb={4}
          // maxWidth={{ xs: '100%', md: '700px' }}
        >
          Blogs
        </Typography>
        {/* <Link target="_blank" href="/blogs">
          <Typography variant="h6" fontWeight={700} mb={4}>
            View more
          </Typography>
        </Link> */}
      </Stack>

      <Grid container spacing={4}>
        {postList.map((post: Post) => (
          <Grid item xs={12} md={6} key={post.id}>
            <Link
              component={NextLink}
              href={`/articles/${post.slug}`}
              sx={{ textDecoration: 'none' }}
              underline="none"
            >
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  sx={{
                    aspectRatio: '16/9',
                  }}
                  image={
                    post.image ||
                    'https://plus.unsplash.com/premium_photo-1674939148088-d71acc1541ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  }
                  title="green iguana"
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {post.title}
                  </Typography>
                  {/* <Stack sx={{ my: 2 }} direction={'row'} spacing={2}>
                    <Typography variant="body1">{post.author?.name}</Typography>
                    <Divider orientation="vertical" flexItem />
                    <Typography variant="body1">{post.tagList?.[0].toLocaleUpperCase()}</Typography>
                  </Stack> */}
                  <Typography my={2} variant="body2">
                    {post.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
