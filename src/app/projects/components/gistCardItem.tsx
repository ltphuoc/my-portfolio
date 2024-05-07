'use client'

import { Stack, Typography } from '@mui/material'

type Props = {
  repoItem: any
}
function GistCardItem({ repoItem }: Props) {
  const a: any = Object.entries(repoItem.files)[0][1]

  return (
    <Stack
      sx={{ cursor: 'pointer' }}
      onClick={() => {
        window.open(repoItem.html_url || 'https://www.github.com/ltphuoc', '_blank')
      }}
      p={2}
      spacing={3}
      borderRadius={1}
    >
      <Stack spacing={1}>
        <Typography variant="body1" fontWeight="bold">
          {a.filename}
        </Typography>
        <Typography variant="body1">{repoItem.description}</Typography>
      </Stack>

      <Typography variant="body2">{a.language}</Typography>
    </Stack>
  )
}
export default GistCardItem
