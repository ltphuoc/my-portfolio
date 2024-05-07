'use client'

import Timeline from '@mui/lab/Timeline'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import { Box, Typography } from '@mui/material'

export default function TimelineEducation() {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: 'red' }} />
          <TimelineConnector sx={{ backgroundColor: 'red' }} />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body1" fontWeight={500}>
            Still learning
          </Typography>
          <Box ml={2} my={1}>
            <Typography variant="body2">
              - After some relaxed time, I{`'`}m back to learning and working.
            </Typography>
            <Typography variant="body2">- Joined a freelance team.</Typography>
          </Box>
          <Typography variant="body2">Now</Typography>
        </TimelineContent>
      </TimelineItem>
      {/* 2023 */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body1" fontWeight={500}>
            Working, Learning and Growing
          </Typography>
          <Box ml={2} my={1}>
            <Typography variant="body2">
              - Working to enhance and refine my JavaScript skills and abilities.
            </Typography>
            <Typography variant="body2">
              - Acquiring knowledge and understanding of web accessibility principles, to ensure
              inclusive design and user experience.
            </Typography>

            <Typography variant="body2">
              - Joined with team in the university to achieve the Most novel ideal FPT
              Entrepreneurial Hackathon 2023.
            </Typography>

            <Typography variant="body2">
              - Complete the final project with the team in university and complete the university
              program.
            </Typography>
          </Box>
          <Typography variant="body2">2023</Typography>
        </TimelineContent>
      </TimelineItem>
      {/* 2022 */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body1" fontWeight={500}>
            Landed first job as a developer
          </Typography>
          <Box ml={2} my={1}>
            <Typography variant="body2">
              - Joined a start-up specializing in food delivery and outsourcing.
            </Typography>
            <Typography variant="body2">
              - Engaged in the development, maintenance, and optimization of the company{"'"}s
              website, a several internal projects.
            </Typography>
            <Typography variant="body2">
              - Acquired knowledge and experience in technologies such as ReactJS, TypeScript,
              MaterialUI, Ant Design, Redux, RestAPI, ASP.NET.
            </Typography>
            <Typography variant="body2">
              - Joined with team in the company to achieve the top 10 Tiki Hacking Trail 2022.
            </Typography>
          </Box>
          <Typography variant="body2">2022</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body1" fontWeight={500}>
            Started to learn programming
          </Typography>
          <Box ml={2} my={1}>
            <Typography variant="body2">
              - Learn fundamentals about programming at university.
            </Typography>
            <Typography variant="body2">- Get started with C/C++.</Typography>
            <Typography variant="body2">
              - After completing the fundamentals, continue to access the web with programming
              languages ​​​​Java, C#, HTML, CSS, JS.
            </Typography>
            <Typography variant="body2">
              - Complete ux/ui courses and soft skills courses supporting programming in the
              university program.
            </Typography>
          </Box>
          <Typography variant="body2">2020-2021</Typography>
        </TimelineContent>
      </TimelineItem>

      {/* 2018-2019 */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body1" fontWeight={500}>
            The first time towards programming
          </Typography>
          <Box ml={2} my={1}>
            <Typography variant="body2">
              - Started with pascal and console app in high school.
            </Typography>
          </Box>
          <Typography variant="body2">2019</Typography>
        </TimelineContent>
      </TimelineItem>
      {/* 2001 */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body1" fontWeight={500}>
            Born
          </Typography>

          <Typography variant="body2">2001</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    // <Timeline
    //   sx={{
    //     [`& .${timelineOppositeContentClasses.root}`]: {
    //       flex: 0.2,
    //     },
    //   }}
    // >
    //   <TimelineItem>
    //     <TimelineOppositeContent color="textSecondary">
    //       <Typography variant="h6">University</Typography>
    //       <Typography variant="body2">2019-2023</Typography>
    //     </TimelineOppositeContent>
    //     <TimelineSeparator>
    //       <TimelineDot color="primary" />
    //       <TimelineConnector />
    //     </TimelineSeparator>
    //     <TimelineContent>
    //       <Typography variant="h6">FPT University, Ho Chi Minh city</Typography>
    //       <Typography variant="body2">Software Engineering in Information Technology</Typography>
    //     </TimelineContent>
    //   </TimelineItem>
    //   <TimelineItem>
    //     <TimelineOppositeContent color="textSecondary">
    //       <Typography variant="h6">High School</Typography>
    //       <Typography variant="body2">2016-2019</Typography>
    //     </TimelineOppositeContent>
    //     <TimelineSeparator>
    //       <TimelineDot color="success" />
    //       <TimelineConnector />
    //     </TimelineSeparator>
    //     <TimelineContent>
    //       <Typography variant="h6">Nguyen Thi Minh Khai, Ho Chi Minh city</Typography>
    //       <Typography variant="body2">General</Typography>
    //     </TimelineContent>
    //   </TimelineItem>
    //   <TimelineItem>
    //     <TimelineOppositeContent color="textSecondary">
    //       <Typography variant="h6">Secondary School</Typography>
    //       <Typography variant="body2">2012-2016</Typography>
    //     </TimelineOppositeContent>
    //     <TimelineSeparator>
    //       <TimelineDot color="primary" />
    //       <TimelineConnector />
    //     </TimelineSeparator>
    //     <TimelineContent>
    //       <Typography variant="h6">Cach Mang Thang Tam, Ho Chi Minh city</Typography>
    //       <Typography variant="body2">General</Typography>
    //     </TimelineContent>
    //   </TimelineItem>
    // </Timeline>
  )
}
