import Header from '@/components/Layout/header'
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry'
import { SettingsContextProvider } from '@/context/SettingsContext'
import { Box, Container, Toolbar } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/prism.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My Portfolio - Phuoc Le',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="yGgaeXm9BqxITPmIQS-C1pYhVV_j1pK-74ZcUcuCavY" />
      <body className={inter.className}>
        <SettingsContextProvider>
          <AppRouterCacheProvider>
            <ThemeRegistry>
              <Header />

              {/* <Suspense fallback={<Loading />}> */}
              <Box component="main">
                <Toolbar disableGutters />
                <Container sx={{ py: { md: 10, xs: 4 } }}>
                  <Box px={1}>{children}</Box>
                </Container>
              </Box>
              {/* </Suspense> */}
            </ThemeRegistry>
          </AppRouterCacheProvider>
        </SettingsContextProvider>
      </body>
    </html>
  )
}
