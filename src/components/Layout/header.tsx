'use client'

import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  Link as MuiLink,
  MenuItem,
  Stack,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Snackbar,
  Alert,
} from '@mui/material'
import clsx from 'clsx'
import NextLink from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { KeyboardCommandKeyButton } from '../Button/KeyboardCommandKeyButton'
import { MenuButton } from '../Button/MenuButton'
import { SwitchThemeButton } from '../Button/SwitchThemeButton'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Article', path: '/articles' },
  { label: 'Timeline', path: '/timeline' },
]

type Props = {}

export default function Header({}: Props) {
  const pathName = usePathname()
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  return (
    <AppBar component="nav" color="transparent" elevation={1}>
      <Container>
        <Toolbar disableGutters>
          <Stack direction="row" justifyContent={'space-between'} alignItems={'center'} width={1}>
            <Stack direction="row" spacing={0.5} display={{ xs: 'none', md: 'block' }}>
              {navItems.map((item) => (
                <NextLink href={item.path} passHref key={item.label}>
                  <Button color="inherit" className={clsx({ active: pathName === item.path })}>
                    {item.label}
                  </Button>
                </NextLink>
              ))}
            </Stack>

            <Box display={{ xs: 'block', md: 'none' }}>
              <MenuButton onClick={toggleDrawer(true)} />
            </Box>

            <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
              <Box
                onClick={toggleDrawer(false)}
                sx={{
                  minWidth: '50dvw',
                  p: 2,

                  backgroundColor: 'background.paper',
                  flexGrow: 1,
                }}
              >
                <List>
                  {navItems.map((item) => (
                    <NextLink key={item.path} href={item.path} passHref legacyBehavior>
                      <ListItem disablePadding>
                        <ListItemButton className={clsx({ active: pathName === item.path })}>
                          <ListItemText
                            primary={item.label}
                            className={clsx({ active: pathName === item.path })}
                          />
                        </ListItemButton>
                      </ListItem>
                    </NextLink>
                  ))}
                </List>
              </Box>
            </Drawer>

            <Stack
              direction={'row'}
              spacing={1}
              onClick={() => {
                setOpenSnackbar(true)
              }}
            >
              {/* <Box display={{ xs: 'none', md: 'block' }}>
                <KeyboardCommandKeyButton onClick={() => {}} />
              </Box> */}
              <SwitchThemeButton />
            </Stack>

            <Snackbar
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
              open={openSnackbar}
              autoHideDuration={3000}
              onClose={(event: React.SyntheticEvent | Event, reason?: string) => {
                if (reason === 'clickaway') {
                  return
                }
                setOpenSnackbar(false)
              }}
            >
              <Alert
                onClose={(event: React.SyntheticEvent | Event, reason?: string) => {
                  if (reason === 'clickaway') {
                    return
                  }
                  setOpenSnackbar(false)
                }}
                severity="info"
              >
                This feature is coming soon.
              </Alert>
            </Snackbar>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
