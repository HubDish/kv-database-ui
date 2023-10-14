import {Bar} from 'react-chartjs-2';
import {Card, Stack, CardContent, Typography} from '@mui/material';
import { BarElement, CategoryScale, LinearScale, Chart, Tooltip} from "chart.js";

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip);

const UptimeChart = ({
  UptimeData
}) => {

  return (
    <Card variant="outlined" sx={{height: '100%'}}>
      <CardContent>
        <Stack
          alignItems="center"
          justifyContent="center"
        >
          <Typography sx={{marginLeft: 3, borderBottom: 2, marginBottom: 1}} variant="body1">Uptime (secs)</Typography>
          <Bar 
            data={{
              labels: ["Total", "Interval"],
              datasets: [
                {
                  label: 'Uptime',
                  backgroundColor: '#3f50b5',
                  data: UptimeData,
                },
              ]
            }}
            options={{
              aspectRatio: 1,
            }}
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default UptimeChart;
