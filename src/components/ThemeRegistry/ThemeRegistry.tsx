'use client'
import useSettings from '@/hook/useSettings'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeOptions, ThemeProvider, createTheme } from '@mui/material/styles'
import { Roboto } from 'next/font/google'
import * as React from 'react'
import palette from './palette'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const { themeMode } = useSettings()

  const lightMode = themeMode === 'light'

  const themeOptions: ThemeOptions = {
    palette: lightMode ? palette.light : palette.dark,
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
    MuiCard: {
      styleOverrides: {
        root: {
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
          backgroundColor: theme.palette.background.appBar,
          backdropFilter: 'blur(8px)',
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
    MuiLink: {
      defaultProps: {
        underline: 'hover',
        fontWeight: 700,
      },
      styleOverrides: {
        underlineNone: {
          '&:hover': {
            color: theme.palette.primary.main,
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
          borderRadius: theme.shape.borderRadius,
        },
      },
    },
  }

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
