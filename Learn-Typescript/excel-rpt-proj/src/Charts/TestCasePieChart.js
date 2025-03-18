import React,{useState,useEffect} from 'react';
import { Box, Typography } from '@mui/material';
import {
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { currentTotalTestCases,currentPassedTestCases,currentFailedTestCases } from './testCaseHistoryResults';
import * as constants from '../Utils/ConstantsAnodiam';

const TestCasePieChart = () => {
  const [curTotalTestCases, setCurTotalTestCases] = useState(0);
  const [curPassedTestCases, setCurPassedTestCases] = useState(0);
  const [curPassedTestCasesPercent, setCurPassedTestCasesPercent] = useState(0);
  const [curFailedTestCases, setCurFailedTestCases] = useState(0);
  const [curFailedTestCasesPercent, setCurFailedTestCasesPercent] = useState(0);

  useEffect(() => {
    async function fetchData() 
    {
      const currentTotalTests  = await currentTotalTestCases;
      setCurTotalTestCases(currentTotalTests);

      const currentPassedTests = await currentPassedTestCases;
      setCurPassedTestCases(currentPassedTests);
      let passedTestPercent = Math.round((currentPassedTests / currentTotalTests) * 100);
      setCurPassedTestCasesPercent(passedTestPercent);

      const currentFailedCases = await currentFailedTestCases;
      setCurFailedTestCases(currentFailedCases);
      let failedTestPercent = Math.round((currentFailedCases / currentTotalTests) * 100);
      setCurFailedTestCasesPercent(failedTestPercent);
    }
    fetchData();
  }, []);

  const data = [
    { name: 'Pass', value: curPassedTestCases },
    { name: 'Fail', value: curFailedTestCases },
  ];
  
  const COLORS = [constants.GREEN_COLOR, constants.RED_COLOR]; // Green and Red like in your image
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
        <Box component="span" sx={{ color: constants.RED_COLOR }}>Defect </Box>
        <Box component="span" sx={{ color: constants.RED_COLOR }}>Density {curFailedTestCasesPercent}%</Box>
        <br />
        <Box component="span" sx={{ color: constants.RED_COLOR }}>Fail </Box>
        <Box component="span" sx={{ color: constants.RED_COLOR }}>{curFailedTestCases}</Box>
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
        <Box component="span" sx={{ color: constants.GREEN_COLOR }}>Pass {curPassedTestCasesPercent}%</Box>
        <br />
        <Box component="span" sx={{ color: constants.GREEN_COLOR }}>Pass {curPassedTestCases}</Box>
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