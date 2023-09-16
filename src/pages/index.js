import {useState, useEffect} from 'react'
import {Typography, Box} from '@mui/material'
import getURL from '@/constants/getURL'
import Settings from './settings';

export default function Home() {
  const [output, setOutput] = useState();

  const handleSubmit = () => {
    fetch(getURL().GET_STATISTICS)
      .then((response) => response.json())
      .then((data) => {
        setOutput(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <Box
      sx={{
        border: 0,
        display: 'grid',
      }}
    >
      <Typography variant="h2">Key-value Database Visualisation</Typography>
      <Box
        sx={{
          marginTop: 2,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)'
        }}
      >
        <Settings/>
      </Box>
      {/* <Button variant='contained' onClick={handleSubmit}>Hello World</Button>
      <Card variant='outlined'>{output}</Card> */}
    </Box>
  )
}
