'use client'

import { Card, CardContent, Stack, Typography } from '@mui/material'

type Props = {
  repoItem: any
}
function RepoCardItem({ repoItem }: Props) {
  return (
    <Card
      sx={{ cursor: 'pointer', height: '100%' }}
      onClick={() => {
        window.open(repoItem.html_url || 'https://www.github.com/ltphuoc', '_blank')
      }}
    >
      <CardContent sx={{ height: '100%' }}>
        <Stack spacing={3} sx={{ height: '100%' }}>
          <Typography variant="body1" fontWeight="bold">
            {repoItem.name || repoItem.description || ''}
          </Typography>
          <Stack flex={1} direction={'row'} spacing={1} useFlexGap flexWrap={'wrap'}>
            {[...repoItem.language]?.map((item: string) => (
              <Typography key={item} variant="body2">
                {item || 'Other'}
              </Typography>
            ))}
          </Stack>
          <Typography mt={'auto'}>{repoItem.stargazers_count} ⭐</Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}
export default RepoCardItem
