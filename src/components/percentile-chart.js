import {Bar} from 'react-chartjs-2';
import {Card, Stack, CardContent, Typography} from '@mui/material';
import { BarElement, CategoryScale, LinearScale, Chart, Tooltip} from "chart.js";

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip);

const PercentileChart = ({
  chartData
}) => {

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack
          alignItems="center"
          justifyContent="center"
        >
          <Typography gutterBottom sx={{marginLeft: 3, borderBottom: 2}} variant="body1">{chartData.title}</Typography>
          <Bar 
            data={{
              labels: ["P50", "P95", "P99", "P100"],
              datasets: [
                {
                  label: chartData.yaxis,
                  backgroundColor: '#3f50b5',
                  data: chartData.percentiles,
                },
              ]
            }}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: chartData.yaxis,
                    font: {
                      size: 14,
                    },
                  },
                },
              },
            }}
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PercentileChart;
