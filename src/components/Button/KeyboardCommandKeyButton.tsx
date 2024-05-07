import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey'
import { Button } from '@mui/material'

type Props = {
  onClick: () => void
}

export const KeyboardCommandKeyButton = ({ onClick }: Props) => {
  return (
    <Button
      variant="contained"
      sx={{ py: 1 }}
      aria-label="command"
      className="active"
      onClick={onClick}
    >
      <KeyboardCommandKeyIcon />
      {/* <Stack direction="row" alignItems="center">
        <Typography variant="h6">+ K</Typography>
      </Stack> */}
    </Button>
  )
}
