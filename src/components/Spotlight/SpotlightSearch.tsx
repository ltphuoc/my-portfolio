import { Paper, TextField, List, ListItem, ListItemText, Button } from '@mui/material'
import { useState } from 'react'

interface DataItem {
  title: string
}

const data: DataItem[] = [
  { title: 'Apples' },
  { title: 'Oranges' },
  { title: 'Bananas' },
  { title: 'Strawberries' },
]

interface Props {
  closeSearch: () => void
}

function SpotlightSearch({ closeSearch }: Props) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(data)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)

    if (value) {
      const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      )

      setResults(filteredData)
    } else {
      setResults(data)
    }
  }

  return (
    <Paper>
      <TextField
        placeholder="Search fruits..."
        value={query}
        onChange={handleChange}
        fullWidth
        variant="outlined"
      />

      <List>
        {results.map((item) => (
          <ListItem key={item.title}>
            <ListItemText>{item.title}</ListItemText>
          </ListItem>
        ))}
      </List>

      <Button onClick={closeSearch}>Close</Button>
    </Paper>
  )
}

export default SpotlightSearch
