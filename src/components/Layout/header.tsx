'use client'

import useSettings from '@/hook/useSettings'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import {
  Alert,
  AppBar,
  Box,
  Button,
  ClickAwayListener,
  Collapse,
  Container,
  Link,
  ListItem,
  ListItemButton,
  ListItemText,
  Snackbar,
  Stack,
} from '@mui/material'
import clsx from 'clsx'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef, useState } from 'react'
import { SwitchThemeButton } from '../Button/SwitchThemeButton'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { IconButton } from '@mui/material'
import { List } from '@mui/material'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Article', path: '/articles' },
  { label: 'Timeline', path: '/timeline' },
]

type Props = {}

export default function Header({}: Props) {
  const { themeMode, toggleTheme } = useSettings()
  const lightMode = themeMode === 'light'

  const pathName = usePathname()

  const [open, setOpen] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState(false)

  const hambugerRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <AppBar component="nav" elevation={1} enableColorOnDark color="transparent">
        <Container>
          {/* <Toolbar disableGutters> */}
          <Stack
            height={'64px'}
            direction="row"
            justifyContent={'space-between'}
            alignItems={'center'}
            width={1}
          >
            <Stack direction="row" spacing={0.5} display={{ xs: 'none', md: 'block' }}>
              {navItems.map((item) => (
                <NextLink href={item.path} passHref key={item.label}>
                  <Button color="inherit" className={clsx({ active: pathName === item.path })}>
                    {item.label}
                  </Button>
                </NextLink>
              ))}
            </Stack>

            <Box display={{ xs: 'block', md: 'none' }} mr={2}>
              <Button
                ref={hambugerRef}
                disableRipple
                variant="contained"
                sx={{ py: 1, position: 'relative' }}
                className="active"
                aria-label="Menu"
                endIcon={<ArrowDropDownIcon />}
                onClick={() => {
                  setOpen((x) => !x)
                }}
              >
                {open ? 'Close' : 'Menu'}
                {/* {open ? <CloseIcon /> : <MenuIcon />} */}
              </Button>
            </Box>

            <ClickAwayListener
              onClickAway={(event: any) => {
                if (!hambugerRef.current!.contains(event.target)) {
                  setOpen(false)
                }
              }}
            >
              <Collapse
                in={open}
                sx={(theme) => ({
                  display: { md: 'none' },
                  position: 'fixed',
                  top: 64,
                  left: 0,
                  right: 0,
                  boxShadow: `0px 16px 20px rgba(170, 180, 190, 0.3)`,
                  ...theme.applyStyles('dark', {
                    boxShadow: '0px 16px 20px rgba(0, 0, 0, 0.8)',
                  }),
                })}
              >
                <Box
                  sx={{
                    py: 2,
                    bgcolor: 'background.default',
                    maxHeight: 'calc(100vh - 56px)',
                    overflow: 'auto',
                  }}
                >
                  <Container>
                    <List disablePadding>
                      {navItems.map((item) => (
                        <Link
                          underline="none"
                          color="inherit"
                          component={NextLink}
                          key={item.path}
                          href={item.path}
                          passHref
                        >
                          <ListItem disablePadding onClick={() => setOpen(false)}>
                            <ListItemButton className={clsx({ active: pathName === item.path })}>
                              <ListItemText
                                primary={item.label}
                                className={clsx({ active: pathName === item.path })}
                              />
                            </ListItemButton>
                          </ListItem>
                        </Link>
                      ))}
                    </List>
                  </Container>
                </Box>
              </Collapse>
            </ClickAwayListener>

            {/* <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
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
              </Drawer> */}

            <Stack direction={'row'} spacing={1}>
              <SwitchThemeButton lightMode={lightMode} onClick={toggleTheme} />
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
          {/* </Toolbar> */}
        </Container>
      </AppBar>
    </>
  )
}
