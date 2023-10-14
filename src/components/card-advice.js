import {Box, Card, Stack, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import {ExpandMore} from '@mui/icons-material';

const CardAdvice = ({
  rule
}) => {

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore/>}
      >
        <Typography variant="h6">{rule.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 2
          }}
        >
          {rule.suggestions.map((sugg) => (
            <Card variant="outlined" key={sugg.suggestion}>
              <CardContent>
                <Stack
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography variant="body1" gutterBottom sx={{borderBottom: 2}}>{sugg.title}</Typography>
                  <Stack
                    alignItems="left"
                    justifyContent="left"
                  >
                    <Typography variant="body1">Option: {sugg.option}</Typography>
                    <Typography variant="body1">Action: {sugg.action}</Typography>
                    {sugg.suggested_values && (
                      <Typography variant="body1">
                        Suggested Value(s): {sugg.suggested_values.map((value) => (
                          value
                        ))}
                      </Typography>
                    )}
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default CardAdvice;
