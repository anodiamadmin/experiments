import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import {
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { currentTotalTestCases, currentPassedTestCases, currentFailedTestCases } from './extractTestResultsVariables';
import * as constants from '../Utils/ConstantsAnodiam';

const TestCasePieChart = () => {
  const [curTotalTestCases, setCurTotalTestCases] = useState(0);
  const [totalTestCasesColor, setTotalTestCasesColor] = useState('');  
  const [curPassedTestCases, setCurPassedTestCases] = useState(0);
  const [curPassedTestCasesPercent, setCurPassedTestCasesPercent] = useState(0);
  const [curFailedTestCases, setCurFailedTestCases] = useState(0);
  const [curFailedTestCasesPercent, setCurFailedTestCasesPercent] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const currentTotalTests = await currentTotalTestCases;
      setCurTotalTestCases(currentTotalTests);
      if(currentTotalTests>300)
      {
        setTotalTestCasesColor(constants.GREEN_COLOR)
      }
      if(currentTotalTests>200 && currentTotalTests<300)
      {
        setTotalTestCasesColor(constants.AMBER_COLOR)
      }
      if(currentTotalTests<=200)
      {
        setTotalTestCasesColor(constants.RED_COLOR)
      }
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

  const COLORS = [constants.GREEN_COLOR, constants.RED_COLOR]; 

  return (
    <Box sx={{ textAlign: 'center', mb: 2 }}>
      <Typography 
        variant="h5"
        sx={{
          mb: 2,
          fontWeight: 'bold',
        }}
      >
        Total{' '}
        <Box 
          component="span"
          sx={{ color: totalTestCasesColor }} // <- Color for the number
        >
          {curTotalTestCases}
        </Box>{' '}
        Test Cases
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          maxWidth: 700,
          mx: 'auto',
          position: 'relative',
        }}
      >
        {/* Pie Chart */}
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={120}
            startAngle={90}
            endAngle={-270}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>

        {/* Labels */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: 200,
            ml: 4, // margin left from the chart
            textAlign: 'left',
          }}
        >
          <Box >
            <Typography variant="h6" sx={{fontWeight: 'bold', color: constants.RED_COLOR}}>
              Defect Density {curFailedTestCasesPercent}%
            </Typography>
            <Typography variant="h6" sx={{fontWeight: 'bold', color: constants.RED_COLOR}}>
              Failed {curFailedTestCases} Tests
            </Typography><br/>
            <Typography variant="h6" sx={{fontWeight: 'bold', color: constants.GREEN_COLOR}}>
              Passed {curPassedTestCasesPercent}%
            </Typography>
            <Typography variant="h6" sx={{fontWeight: 'bold', color: constants.GREEN_COLOR}}>
              Passed {curPassedTestCases} Tests
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TestCasePieChart;