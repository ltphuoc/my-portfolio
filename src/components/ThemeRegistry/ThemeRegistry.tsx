'use client'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeOptions, ThemeProvider, createTheme } from '@mui/material/styles'
import { Roboto } from 'next/font/google'
import * as React from 'react'
import NextAppDirEmotionCacheProvider from './EmotionCache'
import palette from './palette'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const isLight = true

  const themeOptions: ThemeOptions = {
    palette: isLight ? palette.light : palette.dark,
    typography: {
      fontFamily: [roboto.style.fontFamily].join(','),
      fontWeightRegular: 400,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
    shape: { borderRadius: 8 },
  }

  const theme = createTheme(themeOptions)
  theme.components = {
    MuiCssBaseline: {
      styleOverrides: {
        img: {
          display: 'block',
          maxWidth: '100%',
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          // background: '#25262b',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          // background: '#25262b',
          position: 'relative',
          borderRadius: Number(theme.shape.borderRadius) * 2,
          zIndex: 0,
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: 'h6' },
        subheaderTypographyProps: { variant: 'body2', marginTop: theme.spacing(0.5) },
      },
      styleOverrides: {
        root: {
          padding: theme.spacing(3, 3, 0),
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(3),
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.default,
        },
      },
    },
    MuiButton: {
      defaultProps: {},
      styleOverrides: {
        root: {
          fontWeight: 700,
          textTransform: 'none',
          color: theme.palette.text.primary,
        },
        contained: {
          backgroundColor: theme.palette.action.hover,
          color: theme.palette.primary.main,
          '&:hover': {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.action.hover,
          },
        },
        text: {
          '&:hover': {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.action.hover,
          },
          '&.active': {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.action.selected,
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          // color: 'white',
          // textTransform: 'none',
          // '&:hover': {
          //   background: theme.palette.secondary.main,
          // },
          // '&.active': {
          //   color: theme.palette.primary.main,
          //   background: '#25262b',
          // },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        // root: {
        //   color: 'white',
        //   '&.active': {
        //     color: theme.palette.primary.main,
        //   },
        // },
      },
    },
    MuiLink: {
      defaultProps: {
        // underline: 'none',
        underline: 'hover',
        fontWeight: 700,
      },
      styleOverrides: {
        underlineNone: {
          '&:hover': {
            color: theme.palette.primary.main,
          },
        },
      },
    },
  }

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  )
}
