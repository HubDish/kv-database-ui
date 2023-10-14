import {CardContent, } from '@mui/material';
import Percentiles from './percentiles';
import InDepthStats from './in_depth_stats';
import DatabaseStats from './db_stats';

const Statistics = ({
  output
}) => {

  return (
    <CardContent
      sx={{
        height: "75vh",
        overflowY: "scroll"
      }}
    >
      {output && output.db_stats && (
        <DatabaseStats dbStats={output.db_stats}/>
      )}
      <br/><br/>
      {output && output.count_stats && (
        <InDepthStats stats={output.count_stats}/>
      )}
      {output && output.graph_stats && (
        <Percentiles graphStats={output.graph_stats}/>
      )}
    </CardContent>
  )
}

export default Statistics;
