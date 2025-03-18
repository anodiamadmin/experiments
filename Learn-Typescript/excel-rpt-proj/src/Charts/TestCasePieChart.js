import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import {
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { currentTotalTestCases, currentPassedTestCases, currentFailedTestCases } from './testCaseHistoryResults';
import * as constants from '../Utils/ConstantsAnodiam';

const TestCasePieChart = () => {
  const [curTotalTestCases, setCurTotalTestCases] = useState(0);
  const [curPassedTestCases, setCurPassedTestCases] = useState(0);
  const [curPassedTestCasesPercent, setCurPassedTestCasesPercent] = useState(0);
  const [curFailedTestCases, setCurFailedTestCases] = useState(0);
  const [curFailedTestCasesPercent, setCurFailedTestCasesPercent] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const currentTotalTests = await currentTotalTestCases;
      setCurTotalTestCases(currentTotalTests);

      const currentPassedTests = await currentPassedTestCases;
      setCurPassedTestCases(currentPassedTests);
      const passedTestPercent = Math.round((currentPassedTests / currentTotalTests) * 100);
      setCurPassedTestCasesPercent(passedTestPercent);

      const currentFailedCases = await currentFailedTestCases;
      setCurFailedTestCases(currentFailedCases);
      const failedTestPercent = Math.round((currentFailedCases / currentTotalTests) * 100);
      setCurFailedTestCasesPercent(failedTestPercent);
    }
    fetchData();
  }, []);

  const data = [
    { name: 'Pass', value: curPassedTestCases },
    { name: 'Fail', value: curFailedTestCases },
  ];

  const COLORS = [constants.GREEN_COLOR, constants.RED_COLOR]; // Green and Red

  return (
    <Box sx={{ textAlign: 'center', mb: 2 }}>
      {/* Total Test Cases line */}
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          color: '#333',
          fontWeight: 'bold',
          textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
        }}
      >
        Total {curTotalTestCases} Test Cases
      </Typography>

      <Box sx={{ position: 'relative', width: 400, height: 300, mx: 'auto' }}>
        {/* Top Right Labels */}
        <Typography
          variant="h6"
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            textAlign: 'right',
            fontWeight: 'bold',
            color: constants.RED_COLOR,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          <Box component="span" sx={{ color: constants.RED_COLOR }}>Defect </Box>
          <Box component="span" sx={{ color: constants.RED_COLOR }}>Density {curFailedTestCasesPercent}%</Box>
          <br />
          <Box component="span" sx={{ color: constants.RED_COLOR }}>Fail </Box>
          <Box component="span" sx={{ color: constants.RED_COLOR }}>{curFailedTestCases}</Box>
        </Typography>

        {/* Bottom Left Labels */}
        <Typography
          variant="h6"
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            textAlign: 'left',
            fontWeight: 'bold',
            color: constants.RED_COLOR,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          <Box component="span" sx={{ color: constants.GREEN_COLOR }}>Pass </Box>
          <Box component="span" sx={{ color: constants.GREEN_COLOR }}>{curPassedTestCasesPercent}%</Box>
          <br />
          <Box component="span" sx={{ color: constants.GREEN_COLOR }}>Pass </Box>
          <Box component="span" sx={{ color: constants.GREEN_COLOR }}>{curPassedTestCases}</Box>
        </Typography>

        {/* Pie Chart */}
        <PieChart width={400} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={120}
            startAngle={90}
            endAngle={-270}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </Box>
    </Box>
  );
};

export default TestCasePieChart;