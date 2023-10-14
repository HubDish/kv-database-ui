import {Card, Stack, CardContent, Typography} from '@mui/material';
import { convertBytes, convertTime } from '@/constants/utils';

const DbCardStats = ({
  Title,
  Data
}) => {

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="body1" gutterBottom sx={{borderBottom: 2}}>{Title}</Typography>
          {(Title === 'Cumulative Writes' || Title === 'Interval Writes') && (
            <Stack
              alignItems="left"
              justifyContent="left"
            >
              <Typography variant="body1">No. Writes: {Data.no_writes.toLocaleString("en-US")}</Typography>
              <Typography variant="body1">No. Keys: {Data.no_keys.toLocaleString("en-US")}</Typography>
              <Typography variant="body1">No. Commit Groups: {Data.no_commit_groups.toLocaleString("en-US")}</Typography>
              <Typography variant="body1">Writes per Commit Group: {Data.writes_per_commit_group.toLocaleString("en-US")}</Typography>
              <Typography variant="body1">Ingest Size: {convertBytes(Data.ingest_size)}</Typography>
              <Typography variant="body1">Ingest Rate: {convertBytes(Data.ingest_rate, true)}</Typography>
            </Stack>
          )}
          {(Title === 'Cumulative WAL' || Title === 'Interval WAL') && (
            <Stack
              alignItems="left"
              justifyContent="left"
            >
              <Typography variant="body1">No. Writes: {Data.no_writes.toLocaleString("en-US")}</Typography>
              <Typography variant="body1">No. Syncs: {Data.no_syncs.toLocaleString("en-US")}</Typography>
              <Typography variant="body1">Writes per Sync: {Data.writes_per_sync.toLocaleString("en-US")}</Typography>
              <Typography variant="body1">Written Size: {convertBytes(Data.written_size)}</Typography>
              <Typography variant="body1">Written Rate: {convertBytes(Data.written_rate, true)}</Typography>
            </Stack>
          )}
          {(Title === 'Cumulative Stall' || Title === 'Interval Stall') && (
            <Stack
              alignItems="left"
              justifyContent="left"
            >
              <Typography variant="body1">Time: {convertTime(Data.time)}</Typography>
              <Typography variant="body1">Percent: {Data.percent.toLocaleString("en-US")}</Typography>
            </Stack>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default DbCardStats;
