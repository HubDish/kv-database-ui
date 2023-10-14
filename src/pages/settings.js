import {useState, useEffect} from 'react';
import {Button, Typography, Card, CardContent} from '@mui/material';
import BenchmarkSelector from '@/components/benchmark-selector';
import UploadOptions from '@/components/upload-options';
import getURL from '../constants/getURL';

const Settings = ({
  isLoading,
  runBenchmark
}) => {
  const [benchmark, setBenchmark] = useState();
  const [benchmarkList, setBenchmarkList] = useState(false);
  const [optionsUploaded, setOptionsUploaded] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [optionsList, setOptionsList] = useState(false);

  const handleBenchmarkChange = (value) => setBenchmark(value);
  const handleOptionsUploaded = () => setOptionsUploaded(true);

  const getBenchmarkList = () => {
    fetch(getURL().GET_AVAIL_BENCHMARKS)
      .then((response) => response.json())
      .then((data) => {
        setBenchmarkList(data);
        setBenchmark(data[0].label);
      })
      .catch((err) => {
        console.log(err.message);
      });
    }
    
  const getOptionsList = () => {
    fetch(getURL().GET_AVAIL_OPTIONS)
      .then((response) => response.json())
      .then((data) => {
        setOptionsList(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    }
  
  const onClickRun = () => {
    runBenchmark && runBenchmark(benchmark);
  };

  useEffect(() => {
    getBenchmarkList();
    getOptionsList();
  }, []);

  return (
    <Card variant="outlined" sx={{height:"85vh"}}>
      <CardContent>
        <Typography variant="h5">Settings</Typography>
        {benchmarkList && 
          <BenchmarkSelector
            benchmarkList={benchmarkList}
            onBenchmarkChange={handleBenchmarkChange}
          />
        }
        <UploadOptions
          onOptionsUpload={handleOptionsUploaded}
        />
        <br/><br/>
        {(optionsUploaded && !(isLoading)) ? 
          <Button fullWidth variant="contained" onClick={onClickRun}>Run Benchmark</Button>
          :
          <Button fullWidth disabled variant="contained">Run Benchmark</Button>
        }
      </CardContent>
    </Card>
  )
}

export default Settings;
