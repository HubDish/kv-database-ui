import {useState, useEffect} from 'react'
import {Typography, InputLabel, Card, Box, Tabs, Tab, Snackbar, Alert, AlertTitle, CircularProgress} from '@mui/material'
import getURL from '@/constants/getURL'
import Settings from './settings';
import Statistics from './statistics/statistics';
import Advice from './advice';

const Home = () => {
  const [tabValue, setTabValue]= useState(0);
  const [benchmarkOutput, setBenchmarkOutput] = useState("");
  const [advisorOutput, setAdvisorOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
    setIsLoading(true);
    setBenchmarkOutput("");
    setAdvisorOutput("");
    fetch(getURL().GET_STATISTICS+"?benchmark="+benchmark)
      .then((response) => response.json())
      .then((data) => {
        if (data.error){
          setShowError(true);
          setErrorMessage(data.message);
        } else {
          setBenchmarkOutput(data);
          runAdvisor(data.db_path);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
    }

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleCloseMessage = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setShowError(false);
    setErrorMessage("");
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
            isLoading={isLoading}
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
          {isLoading && (
            <Box 
              sx={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <CircularProgress size={100} sx={{marginTop: 50}}/>
            </Box>
          )}
          {benchmarkOutput === "" && !(isLoading) && (
            <InputLabel
              sx={{
                paddingTop: 10,
                textAlign: "center"
              }}
            >
              Run Benchmark to View Statistics
            </InputLabel>
          )}
          {tabValue === 0 && benchmarkOutput !== "" && !(isLoading) && (
            <Statistics
              output={benchmarkOutput}
            />
          )}
          {tabValue === 1 && advisorOutput !== "" && !(isLoading) && (
            <Advice
              output={advisorOutput}
            />
          )}
        </Card>
      </Box>
      <Snackbar open={showError} autoHideDuration={6000} onClose={handleCloseMessage}>
        <Alert onClose={handleCloseMessage} severity="error" sx={{ width: '100%', whiteSpace: 'pre-line' }}>
          <AlertTitle>An error has occurred!</AlertTitle>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default Home;
