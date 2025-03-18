import React,{useState,useEffect} from 'react';
import { Box, Typography } from '@mui/material';
import {
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { currentTotalTestCases,currentPassedTestCases,currentFailedTestCases } from './testCaseHistoryResults';

const TestCasePieChart = () => {
  const [curTotalTestCases, setCurTotalTestCases] = useState(0);
  const [curPassedTestCases, setCurPassedTestCases] = useState(0);
  const [curFailedTestCases, setCurFailedTestCases] = useState(0);

  useEffect(() => {
    async function fetchData() 
    {
      const currentTotalTests  = await currentTotalTestCases;
      setCurTotalTestCases(currentTotalTests);
      const currentPassedTests = await currentPassedTestCases;
      setCurPassedTestCases(currentPassedTests);
      const currentFailedCases = await currentFailedTestCases;
      setCurFailedTestCases(currentFailedCases);
    }
    fetchData();
  }, []);

  const data = [
    { name: 'Pass', value: curPassedTestCases },
    { name: 'Fail', value: curFailedTestCases },
  ];
  
  const COLORS = ['#74D87E', '#F65555']; // Green and Red like in your image
  return (
    <Box sx={{ position: 'relative', width: 400, height: 300, mx: 'auto' }}>
      {/* Labels */}
      <Typography
        variant="h6"
        sx={{
          position: 'absolute',
          top: 20,
          right: 0,
          fontWeight: 'bold',
        }}
      >
        <Box component="span" sx={{ color: 'red' }}>Defect </Box>
        <Box component="span" sx={{ color: 'orange' }}>Density %</Box>
        <br />
        <Box component="span" sx={{ color: 'red' }}>Fail </Box>
        <Box component="span" sx={{ color: 'green' }}>Number</Box>
      </Typography>

      <Typography
        variant="h6"
        sx={{
          position: 'absolute',
          bottom: 20,
          left: 0,
          fontWeight: 'bold',
        }}
      >
        <Box component="span" sx={{ color: 'red' }}>Pass %</Box>
        <br />
        <Box component="span" sx={{ color: 'green' }}>Pass Number</Box>
      </Typography>

      {/* Pie Chart */}
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          startAngle={90}
          endAngle={-270}
          paddingAngle={3}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
    </Box>
  );
};

export default TestCasePieChart;