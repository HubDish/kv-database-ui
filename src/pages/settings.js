import {useState, useEffect} from 'react';
import {Typography, Card, CardContent} from '@mui/material';
import BenchmarkSelector from '@/components/benchmark-selector';
import getURL from '../constants/getURL';

export default function Settings() {
  const [benchmark, setBenchmark] = useState();
  const [benchmarkList, setBenchmarkList] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [optionsList, setOptionsList] = useState(false);

  const handleBenchmarkChange = (value) => setBenchmark(value);

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
        console.log(data.DBOptions[0].description);
      })
      .catch((err) => {
        console.log(err.message);
      });
    }
  

  useEffect(() => {
    getBenchmarkList();
    getOptionsList();
  }, []);

  useEffect(() => {
    console.log(benchmark);
  }, [benchmark]);

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5">Settings & Options</Typography>
        {benchmarkList && 
          <BenchmarkSelector
            benchmarkList={benchmarkList}
            onBenchmarkChange={handleBenchmarkChange}
          />
        }
      </CardContent>
    </Card>
  )
}
