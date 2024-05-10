'use client'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { Button } from '@mui/material'

type SwitchThemeButtonProps = {
  lightMode: boolean
  onClick: VoidFunction
}

export const SwitchThemeButton = ({ lightMode, onClick }: SwitchThemeButtonProps) => {
  return (
    <Button
      variant="contained"
      sx={{ py: 1 }}
      className="active"
      aria-label="change theme"
      onClick={onClick}
    >
      {lightMode ? <LightModeIcon /> : <DarkModeIcon />}
    </Button>
  )
}
