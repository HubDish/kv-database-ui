import {useState, useEffect} from 'react';
import {Box} from '@mui/material';
import BenchmarkSelector from '@/components/benchmark-selector';
import getURL from '../constants/getURL';

export default function Settings() {
  const [benchmarkList, setBenchmarkList] = useState(false);

  const getBenchmarkList = () => {
    fetch(getURL().GET_AVAIL_BENCHMARKS)
      .then((response) => response.json())
      .then((data) => {
        setBenchmarkList(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    }

  useEffect(() => {
    getBenchmarkList();
  }, []);

  return (
    <Box sx={{border:5}}>
      {benchmarkList && 
        <BenchmarkSelector
          benchmarkList={benchmarkList}
        />
      }
    </Box>
  )
}
