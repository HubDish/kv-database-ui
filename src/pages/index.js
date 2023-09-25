import {useState, useEffect} from 'react'
import {Typography, InputLabel, Card, Box, Tabs, Tab} from '@mui/material'
import getURL from '@/constants/getURL'
import Settings from './settings';
import Statistics from './statistics';
import Advice from './advice';

const Home = () => {
  const [tabValue, setTabValue]= useState(0);
  const [benchmarkOutput, setBenchmarkOutput] = useState("");
  const [advisorOutput, setAdvisorOutput] = useState("");

  const runAdvisor = (db_path) => {
    fetch(getURL().GET_ADVICE+"?db_path="+db_path)
      .then((response) => response.json())
      .then((data) => {
        setAdvisorOutput(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    }

  const runBenchmark = (benchmark) => {
    fetch(getURL().GET_STATISTICS+"?benchmark="+benchmark)
      .then((response) => response.json())
      .then((data) => {
        setBenchmarkOutput(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    }

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

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
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'auto',
          gridTemplateAreas: '"setting main main"'
        }}
      >
        <Box sx={{gridArea: 'setting'}}>
          <Settings
            runBenchmark={runBenchmark}
          />
        </Box>
        <Card
          variant='outlined'
          sx={{
            gridArea: 'main',
            marginLeft: 3,
            height: '85vh'
          }}
        >
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="inherit"
          >
            <Tab label="Statistics" value={0}/>
            {advisorOutput === "" ? 
              <Tab label="Advisor" value={1} disabled/>
              :
              <Tab label="Advisor" value={1}/>
            }
          </Tabs>
          {tabValue === 0 && benchmarkOutput === "" && (
            <InputLabel
              sx={{
                paddingTop: 10,
                textAlign: "center"
              }}
            >
              Run Benchmark to View Statistics
            </InputLabel>
          )}
          {tabValue === 0 && benchmarkOutput !== "" && (
            <Statistics
              output={benchmarkOutput}
            />
          )}
          {tabValue === 1 && (
            <Advice
              output={''}
            />
          )}
        </Card>
      </Box>
      {/* <Button variant='contained' onClick={handleSubmit}>Hello World</Button>
      <Card variant='outlined'>{output}</Card> */}
    </Box>
  )
}

export default Home;
