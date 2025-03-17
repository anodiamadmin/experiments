import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceArea
} from 'recharts';
import * as constants from '../Utils/ConstantsAnodiam';

const data = [
  { name: 'Sep-2024', value: 196 },
  { name: 'Oct-2024', value: 284 },
  { name: 'Nov-2024', value: 336 },
  { name: 'Dec-2024', value: 280 },
  { name: 'Jan-2025', value: 296 },
  { name: 'Feb-2025', value: 360 }
];

const TotalTestCasesChart = () => {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h6">Total Test Cases Metrics for last 6 months</Typography>

      <Box display="flex" justifyContent="center" mt={2}>
        <LineChart
          width={800}
          height={400}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          {/* Background colored areas according to thresholds */}
          <ReferenceArea y1={0} y2={200} fill={constants.RED_COLOR} fillOpacity={0.4} />
          <ReferenceArea y1={201} y2={300} fill={constants.AMBER_COLOR} fillOpacity={0.4} />
          <ReferenceArea y1={301} y2={500} fill={constants.GREEN_COLOR} fillOpacity={0.4} />

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 500]} />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#000"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </Box>
    </Paper>
  );
};

export default TotalTestCasesChart;