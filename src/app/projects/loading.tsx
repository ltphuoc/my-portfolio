import { Box, Grid, Skeleton, Stack, Typography } from '@mui/material'
import Link from 'next/link'

export default function Loading() {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" fontWeight={700}>
          Projects
        </Typography>
        <Link target="_blank" href="https://github.com/ltphuoc?tab=repositories">
          <Typography variant="h6" fontWeight={700}>
            Github repos
          </Typography>
        </Link>
      </Stack>

      <Box mt={4}>
        <Typography variant="h5" fontWeight={'bold'} mb={2}>
          Capstone Project Repos
        </Typography>
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} xs={12}>
            <Skeleton variant="rounded" height={164} />
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <Skeleton variant="rounded" height={164} />
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <Skeleton variant="rounded" height={164} />
          </Grid>
        </Grid>
      </Box>

      <Box mt={4}>
        <Typography variant="h5" fontWeight={'bold'} mb={2}>
          My Personal Repos
        </Typography>
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} xs={12}>
            <Skeleton variant="rounded" height={164} />
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <Skeleton variant="rounded" height={164} />
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <Skeleton variant="rounded" height={164} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
