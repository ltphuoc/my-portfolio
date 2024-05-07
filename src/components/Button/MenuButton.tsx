import MenuIcon from '@mui/icons-material/Menu'
import { IconButton } from '@mui/material'

type Props = {
  onClick?: () => void
}
export const MenuButton = ({ onClick }: Props) => {
  return (
    <IconButton
      disableTouchRipple
      sx={{
        py: 1,
        '&:hover': {
          backgroundColor: 'transparent',
        },
      }}
      color="inherit"
      aria-label="menu"
      onClick={onClick}
    >
      <MenuIcon />
    </IconButton>
  )
}
