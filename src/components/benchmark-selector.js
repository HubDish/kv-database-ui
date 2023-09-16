import {useState, useEffect} from 'react';
import {Box, Autocomplete, Tooltip, TextField} from '@mui/material';

export default function BenchmarkSelector({benchmarkList, onBenchmarkChange}) {
  const [benchmark, setBenchmark] = useState(benchmarkList[0]);

  return (
    <Autocomplete
      id="select-benchmark"
      options={benchmarkList}
      value={benchmark}
      onChange={(event, newValue) => {
        setBenchmark(newValue);
        onBenchmarkChange && onBenchmarkChange(newValue.label);
      }}
      sx = {{
        width: 500,
        marginTop: 4
      }}
      getOptionLabel={(option) => option.label}
      isOptionEqualToValue={(option, value) => option.label === value.label}
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
  )
}