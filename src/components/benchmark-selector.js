import {useState, useEffect} from 'react';
import {Card, Box, Autocomplete, Tooltip, TextField} from '@mui/material';

export default function BenchmarkSelector({benchmarkList}) {
  const [benchmark, setBenchmark] = useState(benchmarkList[0]);

  useEffect(() => {
    console.log(benchmark);
  } ,[benchmark])

  return (
    <Card>
      <Autocomplete
        id="select-benchmark"
        options={benchmarkList}
        value={benchmark}
        onChange={(event, newValue) => {
          setBenchmark(newValue);
        }}
        sx = {{
          width: 500,
          marginTop: 4
        }}
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => {
          return(
            <Tooltip title={option.description} {...props}>
              <Box>
                {option.label}
              </Box>
            </Tooltip>
          )
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Benchmark"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
          />
        )}
      />
    </Card>
  )
}