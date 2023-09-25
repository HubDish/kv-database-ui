import {Bar} from 'react-chartjs-2';
import {Card, Stack, CardContent, Typography} from '@mui/material';
import { BarElement, CategoryScale, LinearScale, Chart } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(BarElement, CategoryScale, LinearScale, ChartDataLabels);

const BarChart = ({
  ChartData
}) => {

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack
          alignItems="center"
          justifyContent="center"
        >
          <Typography sx={{marginLeft: 3, borderBottom: 2, marginBottom: 1}} variant="body1">{ChartData.title}</Typography>
          <Bar 
            data={{
              labels: ["P50", "P95", "P99", "P100"],
              datasets: [
                {
                label: ChartData.yaxis,
                backgroundColor: '#3f50b5',
                data: ChartData.percentiles,
                },
              ]
            }}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: ChartData.yaxis,
                    font: {
                      size: 14,
                    },
                  },
                },
              },
              plugins: {
                datalabels: {
                  color: '3f50b5',
                  font: {
                    weight: 'bold',
                  },
                  anchor: 'end',
                  align: 'top',
                  formatter: function (value) {
                    return value.toLocaleString("en-US", {maximumFractionDigits: 2});
                  },
                },
              },
              layout: {
                padding: {
                  top: 30, 
                },
              },
            }}
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default BarChart;
