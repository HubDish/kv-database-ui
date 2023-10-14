import {Box, Typography} from '@mui/material';
import UptimeChart from '@/components/uptime-chart';
import DbCardStats from '@/components/db-card-stats';

const DatabaseStats = ({
  dbStats
}) => {

  return (
    <Box sx={{marginLeft: 2}}>
      <Typography variant="h6">Database Statistics</Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'repeat(2, 2fr)',
          gridTemplateAreas: `
            "chart main main main"
            "chart main main main"
          `,
          gap: 2
        }}
      >
        <Box sx={{gridArea: 'chart', gridRow: '1 / 3'}}>
          <UptimeChart
            UptimeData={dbStats.uptime}
          />
        </Box>
        <Box sx={{
          gridArea: 'main',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 2
        }}>
          <DbCardStats
            Title={"Cumulative Writes"}
            Data={dbStats.cumulative_writes}
          />
          <DbCardStats
            Title={"Cumulative WAL"}
            Data={dbStats.cumulative_wal}
          />
          <DbCardStats
            Title={"Cumulative Stall"}
            Data={dbStats.cumulative_stall}
          />
          <DbCardStats
            Title={"Interval Writes"}
            Data={dbStats.interval_writes}
          />
          <DbCardStats
            Title={"Interval WAL"}
            Data={dbStats.interval_wal}
          />
          <DbCardStats
            Title={"Interval Stall"}
            Data={dbStats.interval_stall}
          />
        </Box>
      </Box>
    </Box>
    
  )
}

export default DatabaseStats;
