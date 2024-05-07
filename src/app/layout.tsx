import Header from '@/components/Layout/header'
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry'
import { Box, Container, Toolbar } from '@mui/material'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/prism.css'
import { Suspense } from 'react'
import Loading from './loading'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My Portfolio - Phuoc Le',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          <Header />

          <Suspense fallback={<Loading />}>
            <Box component="main">
              <Toolbar disableGutters />
              <Container sx={{ py: { md: 10, xs: 4 } }}>
                <Box px={1}>{children}</Box>
              </Container>
            </Box>
          </Suspense>
        </ThemeRegistry>
      </body>
    </html>
  )
}
