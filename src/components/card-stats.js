import {Card, Stack, CardContent, Typography} from '@mui/material';

const CardStats = ({
  data
}) => {

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="body1" gutterBottom sx={{borderBottom: 2}}>{data.title}</Typography>
          <Typography variant="body1">{data.value.toLocaleString("en-US")}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CardStats;
