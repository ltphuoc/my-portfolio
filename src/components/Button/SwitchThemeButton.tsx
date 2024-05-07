'use client'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { Button } from '@mui/material'
import { useEffect, useState } from 'react'

export const SwitchThemeButton = () => {
  const [darkMode, setDarkMode] = useState(false)

  function handleChangeTheme() {
    setDarkMode((prev) => !prev)
  }

  useEffect(() => {
    if (darkMode) {
      setTimeout(() => {
        setDarkMode(false)
      }, 500)
    }
  }, [darkMode])

  return (
    <Button
      variant="contained"
      sx={{ py: 1 }}
      className="active"
      aria-label="change theme"
      onClick={handleChangeTheme}
    >
      {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
    </Button>
  )
}
