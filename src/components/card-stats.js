import {Bar} from 'react-chartjs-2';
import {Card, Stack, CardContent, Typography, Box} from '@mui/material';

const CardStats = ({
  Data
}) => {

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="body1" sx={{borderBottom: 2, marginBottom: 1}}>{Data.title}</Typography>
          <Typography variant="body1">{Data.value.toLocaleString("en-US")}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CardStats;
