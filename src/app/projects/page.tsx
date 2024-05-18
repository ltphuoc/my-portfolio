import { getRepoList, getRepoListCapstoneProject } from '@/utils'
import { Box, Grid, Link, Stack, Typography } from '@mui/material'
import RepoCardItem from './components/repoCardItem'

export default async function Blog() {
  const repoList = await getRepoList()
  const repoListCapstoneProject = await getRepoListCapstoneProject()

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

      {repoListCapstoneProject.length > 0 && (
        <Box mt={4}>
          <Typography variant="h5" fontWeight={'bold'} mb={2}>
            Capstone Project Repos
          </Typography>
          <Grid container spacing={3}>
            {repoListCapstoneProject?.map((x) => (
              <Grid item key={x.id} lg={4} md={6} xs={12}>
                <RepoCardItem repoItem={x} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {repoList.length > 0 && (
        <Box mt={4}>
          <Typography variant="h5" fontWeight={'bold'} mb={2}>
            My Personal Repos
          </Typography>
          <Grid container spacing={3}>
            {repoList?.map((x) => (
              <Grid item key={x.id} lg={4} md={6} xs={12}>
                <RepoCardItem repoItem={x} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  )
}
