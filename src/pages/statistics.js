import {useState, useEffect} from 'react';
import {Typography, Card, CardContent, TextField} from '@mui/material';

const Statistics = ({
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
        <Typography variant="h5">Statistics</Typography>
        <TextField
          disabled
          multiline
          fullWidth
          value={output}
          sx={{
            marginTop: 4,
            height: "75vh",
            display: "flex",
            overflowY: "scroll"
          }}
        />
      </CardContent>
    </Card>
  )
}

export default Statistics;
