import {useState, useEffect} from 'react';
import {Box, Autocomplete, Tooltip, TextField} from '@mui/material';

const BenchmarkSelector = ({
  benchmarkList, 
  onBenchmarkChange
}) => {
  const [benchmark, setBenchmark] = useState(benchmarkList[0]);

  return (
    <Autocomplete
      id="select-benchmark"
      disableClearable
      options={benchmarkList}
      value={benchmark}
      onChange={(event, newValue) => {
        setBenchmark(newValue);
        onBenchmarkChange && onBenchmarkChange(newValue.label);
      }}
      sx = {{
        marginTop: 4
      }}
      getOptionLabel={(option) => option.description}
      isOptionEqualToValue={(option, value) => option.label === value.label}
      renderOption={(props, option) => {
        return(
          <Tooltip title={option.label} {...props}>
            <Box>
              {option.description}
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

export default BenchmarkSelector;
