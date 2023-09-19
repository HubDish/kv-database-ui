import {useState, useEffect} from 'react';
import {Typography, Card, CardContent, TextField} from '@mui/material';

const Advice = ({
  output
}) => {

  return (
    <Card 
      variant="outlined"
      sx={{
        marginLeft: 3,
        height: "85vh"
      }}
    >
      <CardContent>
        <Typography variant="h5">Advisor</Typography>
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
    </Card>
  )
}

export default Advice;
