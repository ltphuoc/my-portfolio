import EmailIcon from '@mui/icons-material/Email'
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Box, Grid, Link, Stack, Typography } from '@mui/material'
import Image from 'next/image'

const techStackList = [
  'html5',
  'css3',
  'javascript',
  'typescript',
  'react',
  'nextjs',
  'csharp',
  'flutter',
  'sass',
  'bootstrap',
  'antdesign',
  'tailwindcss',
]

export default function Home() {
  return (
    <>
      <Grid container rowSpacing={12} columnSpacing={4}>
        <Grid item md={7}>
          <Box sx={{ display: { xs: 'block', md: 'none' }, mb: 4, maxWidth: 300 }}>
            <Image
              alt={'My ava'}
              src={'/images/ava.jpg'}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto', aspectRatio: 1, borderRadius: '12px' }}
              draggable={false}
            />
          </Box>

          <Stack spacing={8}>
            <Box>
              <Typography variant="h3" component="h1" fontWeight={700} mb={4}>
                {"I'm Phuoc Le, a software engineer living in Ho Chi Minh City, Vietnam"}
              </Typography>

              <Stack spacing={3}>
                <Typography variant="body1">
                  {
                    "Welcome to my personal website! I'm really excited to have you here. Let me introduce myself. I'm a software engineer who loves reading books and working on side projects. Learning is something I truly enjoy, and I like sharing what I learn with others. This website is where I share the interesting things I discover."
                  }
                </Typography>
                <Typography variant="body1">
                  {
                    'I have a passion for technology and enjoy diving into the basics of computer science, such as data structures and algorithms, as well as system design. By understanding these fundamentals, I can build a strong foundation and explore new, advanced technologies more effectively.'
                  }
                </Typography>
                <Typography variant="body1">
                  {
                    'Thank you for visiting, and I hope you find something valuable during your time here.'
                  }
                </Typography>
                <Typography variant="body1">{'Happy exploring!'}</Typography>
              </Stack>
            </Box>

            <Box>
              <Typography variant="h5" fontWeight={700} mb={4}>
                Tech Stack
              </Typography>

              <Stack direction={'row'} spacing={4} useFlexGap flexWrap={'wrap'}>
                {techStackList.map((item) => (
                  <Image
                    key={item}
                    alt={item}
                    src={`https://raw.githubusercontent.com/devicons/devicon/master/icons/${item}/${item}-original.svg`}
                    width={60}
                    height={60}
                    draggable={false}
                  />
                ))}
              </Stack>
            </Box>
          </Stack>
        </Grid>
        <Grid item md={5}>
          <Box sx={{ transform: 'rotate(2deg)', display: { xs: 'none', md: 'block' } }}>
            <Image
              alt={'My ava'}
              src={'/images/ava.jpg'}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto', aspectRatio: 1, borderRadius: '12px' }}
              draggable={false}
            />
          </Box>

          {/* <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <Typography variant="h5" fontWeight={700} mb={4}>
              Contact
            </Typography>
          </Box> */}

          <Stack spacing={3} mt={{ xs: 0, md: 6 }}>
            <Link
              href="https://github.com/ltphuoc"
              color="inherit"
              underline="none"
              target="_blank"
            >
              <Stack direction={'row'} alignItems={'center'} spacing={2}>
                <GitHubIcon />
                <Typography variant="body1">Follow on GitHub</Typography>
              </Stack>
            </Link>

            <Link
              href="https://www.linkedin.com/in/ltphuoc/"
              color="inherit"
              underline="none"
              target="_blank"
            >
              <Stack direction={'row'} alignItems={'center'} spacing={2}>
                <LinkedInIcon />
                <Typography variant="body1">Follow on LinkedIn</Typography>
              </Stack>
            </Link>

            <Link
              href="https://www.facebook.com/thanhphuoc259"
              color="inherit"
              underline="none"
              target="_blank"
            >
              <Stack direction={'row'} alignItems={'center'} spacing={2}>
                <FacebookIcon />
                <Typography variant="body1">Follow on Facebook</Typography>
              </Stack>
            </Link>
          </Stack>
          <Box mt={8}>
            <Link
              href="mailto:thanhphuoc.se@gmail.com"
              color="inherit"
              underline="none"
              target="_blank"
            >
              <Stack direction={'row'} alignItems={'center'} spacing={2}>
                <EmailIcon />
                <Typography variant="body1">thanhphuoc.se@gmail.com</Typography>
              </Stack>
            </Link>
          </Box>
        </Grid>
      </Grid>

      {/* <Stack spacing={8}>
        <Box>
          <Typography variant="h4" component="h1" fontWeight={700} mb={4}>
            Hello ✌️{" I'm Phuoc Le, a software engineer living in Ho Chi Minh City, Vietnam"}
          </Typography>

          <Box>
            <Typography variant="body1">
              {"I'm a software engineer based in Ho Chi Minh, VietNam."}
            </Typography>
            <Typography variant="body1">
              I love to{' '}
              <Link component={NextLink} href={'/projects'}>
                build things
              </Link>{' '}
              with JavaScript and love to learn new technologies.
            </Typography>

            <Typography variant="body1" mt={2}>
              Find out{' '}
              <Link component={NextLink} href={'/about'}>
                more.
              </Link>
            </Typography>
          </Box>
        </Box>

        <Box>
          <Typography variant="h5" fontWeight={700} mb={4}>
            Tech Stack
          </Typography>

          <Stack direction={'row'} spacing={2} useFlexGap flexWrap={'wrap'}>
            {techStackList.map((item) => (
              <Image
                key={item}
                alt={item}
                src={`https://raw.githubusercontent.com/devicons/devicon/master/icons/${item}/${item}-original.svg`}
                width={60}
                height={60}
                draggable={false}
              />
            ))}
          </Stack>
        </Box>

        <Box>
          <Typography variant="h5" fontWeight={700} mb={4}>
            Contact me
          </Typography>

          <Stack direction={'row'} useFlexGap flexWrap={'wrap'} spacing={2}>
            <a href="">
              <EmailIcon fontSize="large" sx={{ color: '#4284F2' }} />
            </a>
            <a href="">
              <Phone fontSize="large" sx={{ color: '#31CF60' }} />
            </a>
            <a href="">
              <GitHubIcon fontSize="large" sx={{ color: '#000000' }} />
            </a>
            <a href="">
              <LinkedInIcon fontSize="large" sx={{ color: '#0C64C3' }} />
            </a>
            <a href="">
              <FacebookIcon fontSize="large" sx={{ color: '#1D9DEE' }} />
            </a>
            <a href="">
              <InstagramIcon fontSize="large" sx={{ color: '#DA2D6C' }} />
            </a>
          </Stack>
        </Box>
      </Stack> */}
      {/* <Box>
          <Typography variant="h5" fontWeight={700} mb={4}>
            My Github Stats
          </Typography>

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 5 }}>
            <Box width={1}>
              <Image
                width={0}
                height={0}
                style={{ width: '100%', height: 'auto' }}
                src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=ltphuoc&layout=compact&langs_count=6&theme=tokyonight"
                alt={'GitHub Stats'}
              />
            </Box>
            <Box width={1}>
              <Image
                width={0}
                height={0}
                style={{ width: '100%', height: 'auto' }}
                src="https://github-readme-stats.vercel.app/api?username=ltphuoc&show_icons=true&locale=en&theme=tokyonight"
                alt={'GitHub Stats'}
              />
            </Box>
          </Stack>
        </Box> */}
    </>
  )
}
