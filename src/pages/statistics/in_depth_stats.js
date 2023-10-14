import {Box, Typography, Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import CardStats from '@/components/card-stats';
import {ExpandMore} from '@mui/icons-material';

const InDepthStats = ({
  stats
}) => {

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore/>}
      >
        <Typography variant="h6">In-Depth Statistics</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 2
          }}
        >
          {stats.map((data) => (
            <CardStats
              key={data.id}
              data={data}
            />
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}

export default InDepthStats;
