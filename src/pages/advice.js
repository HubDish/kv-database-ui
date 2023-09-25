import {useState, useEffect} from 'react';
import {Typography, Card, CardContent, TextField} from '@mui/material';

const Advice = ({
  output
}) => {

  return (
    <CardContent>
      <TextField
        disabled
        multiline
        fullWidth
        value={output}
        sx={{
          marginTop: 4
        }}
      />
    </CardContent>
  )
}

export default Advice;
