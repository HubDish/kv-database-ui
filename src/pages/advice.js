import {Box, CardContent} from '@mui/material';
import CardAdvice from '@/components/card-advice';

const Advice = ({
  output
}) => {

  return (
    <CardContent
      sx={{
        height: "75vh",
        overflowY: "scroll"
      }}
    >
      <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)'
          }}
        >
          {output.map((rule) => (
            <CardAdvice
              key={rule.rule}
              rule={rule}
            />
          ))}
        </Box>
    </CardContent>
  )
}

export default Advice;
