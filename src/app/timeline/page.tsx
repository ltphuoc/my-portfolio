import { Typography } from '@mui/material'
import TimelineEducation from './components/TimeLine'

export default function Education() {
  return (
    <>
      <Typography variant="h4" fontWeight={700} mb={2}>
        Timeline
      </Typography>
      <TimelineEducation />
    </>
  )
}
