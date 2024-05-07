import { Box, Grid, Typography } from '@mui/material'
import TimelineEducation from './components/TimeLine'
import Image from 'next/image'

export default function Education() {
  return (
    <>
      {/* <Grid container>
        <Grid item xs={12} md={2}>
          <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Image
              alt=""
              src="/images/ava.jpg"
              width={250}
              height={280}
              draggable={false}
              style={{ borderRadius: '20px' }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={10}>
          <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
          </Box>
        </Grid>
      </Grid> */}
      <Typography variant="h4" fontWeight={700} mb={2}>
        Timeline
      </Typography>
      <TimelineEducation />
    </>
  )
}
