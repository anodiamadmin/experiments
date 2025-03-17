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

const data = [
  { name: 'Jan', value: 75 },
  { name: 'Feb', value: 35 },
  { name: 'Mar', value: 25 },
  { name: 'Apr', value: 50 },
  { name: 'May', value: 10 },
  { name: 'Jun', value: 70 },
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
          {/* Background colored areas */}
          <ReferenceArea y1={0} y2={30} fill="red" fillOpacity={0.6} />
          <ReferenceArea y1={30} y2={60} fill="orange" fillOpacity={0.6} />
          <ReferenceArea y1={60} y2={100} fill="yellowgreen" fillOpacity={0.6} />

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
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