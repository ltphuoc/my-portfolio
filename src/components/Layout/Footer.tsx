import { Box, Container, Divider, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
type Props = {}
export default function Footer({}: Props) {
  return (
    <Container>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 4,
        }}
      >
        <Typography variant="body2" color="text.disabled">
          Made with ❤️ by Segen Le
        </Typography>
      </Box>
    </Container>
  )
}
