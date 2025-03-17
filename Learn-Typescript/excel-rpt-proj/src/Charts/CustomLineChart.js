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
  { name: 'Jan', value: 75 },
  { name: 'Feb', value: 35 },
  { name: 'Mar', value: 65 },
  { name: 'Apr', value: 56 },
  { name: 'May', value: 10 },
  { name: 'Jun', value: 72 },
  { name: 'Jul', value: 80 },
];

const CustomLineChart = () => {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h6">Performance Over Time</Typography>

      <Box display="flex" justifyContent="center" mt={2}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          {/* Background colored areas according to thresholds */}
          <ReferenceArea y1={0} y2={50} fill={constants.RED_COLOR} fillOpacity={0.4} />
          <ReferenceArea y1={50} y2={74} fill={constants.AMBER_COLOR} fillOpacity={0.4} />
          <ReferenceArea y1={75} y2={100} fill={constants.GREEN_COLOR} fillOpacity={0.4} />

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
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

export default CustomLineChart;