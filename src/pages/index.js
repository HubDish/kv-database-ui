import {useState, useEffect} from 'react'
import {Typography, Box} from '@mui/material'
import getURL from '@/constants/getURL'
import Settings from './settings';
import Statistics from './statistics';
import Advice from './advice';

export default function Home() {
  const [benchmarkOutput, setBenchmarkOutput] = useState("");

  const runBenchmark = () => {
    fetch(getURL().GET_STATISTICS)
      .then((response) => response.json())
      .then((data) => {
        setBenchmarkOutput(data);
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
        paddingLeft: 4,
        paddingRight: 4
      }}
    >
      <Typography variant="h2">Key-value Database Visualisation (RocksDB)</Typography>
      <Box
        sx={{
          marginTop: 2,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)'
        }}
      >
        <Settings
          runBenchmark={runBenchmark}
        />
        <Statistics
          output={benchmarkOutput}
        />
        <Advice
          output={""}
        />
      </Box>
      {/* <Button variant='contained' onClick={handleSubmit}>Hello World</Button>
      <Card variant='outlined'>{output}</Card> */}
    </Box>
  )
}
