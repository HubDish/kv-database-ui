import {useState, useEffect} from 'react'
import {Box} from '@mui/material'
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
        border: 5,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)'
      }}
    >
      {/* <Button variant='contained' onClick={handleSubmit}>Hello World</Button>
      <Card variant='outlined'>{output}</Card> */}
      <Settings/>
    </Box>
  )
}
