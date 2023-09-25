import {useState, useEffect} from 'react';
import {Box, Typography, Card, CardContent, TextField} from '@mui/material';
import BarChart from '@/components/bar-charts';
import CardStats from '@/components/card-stats';

const Statistics = ({
  output
}) => {

  return (
    <CardContent
      sx={{
        marginTop: 4,
        height: "75vh",
        overflowY: "scroll"
      }}
    >
      {output && output.count_stats && (
        <Box>
          <Typography variant="h6">Relevant Statistics</Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 2
            }}
          >
            {output.count_stats.map((data) => (
              <CardStats
                key={data.id}
                Data={data}
              />
            ))}
          </Box>
        </Box>
      )}
      {output && output.graph_stats && (
        <Box sx={{marginTop: 5}}>
          <Typography variant="h6">Percentiles</Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 2
            }}
          >
            {output.graph_stats.map((chartData) => (
              <BarChart
                key={chartData.id}
                ChartData={chartData}
              />
            ))}
          </Box>
        </Box>
      )}
    </CardContent>
  )
}

export default Statistics;
