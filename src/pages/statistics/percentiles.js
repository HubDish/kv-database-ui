import {Box, Typography, Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import PercentileChart from '@/components/percentile-chart';
import {ExpandMore} from '@mui/icons-material';

const Percentiles = ({
  graphStats
}) => {

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore/>}
      >
        <Typography variant="h6">In-Depth Percentiles</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 2
          }}
        >
          {graphStats.map((chartData) => (
            <PercentileChart
              key={chartData.id}
              chartData={chartData}
            />
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}

export default Percentiles;
