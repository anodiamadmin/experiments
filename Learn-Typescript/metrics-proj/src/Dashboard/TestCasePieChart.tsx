import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { PieChart, Pie, Cell } from 'recharts';
import { useConfig } from "../Utils/ConfigLoader";
import * as constants from '../Utils/ConstantsAnodiam';

const TestCasePieChart: React.FC = () => {
  const [curTotalTestCases, setCurTotalTestCases] = useState<number|null>(null);
  const [totalTestCasesColor, setTotalTestCasesColor] = useState<string>('');  
  const [curPassedTestCases, setCurPassedTestCases] = useState<number|null>(null);
  const [curPassedTestCasesPercent, setCurPassedTestCasesPercent] = useState<number>(0);
  const [curFailedTestCases, setCurFailedTestCases] = useState<number|null>(null);
  const [curFailedTestCasesPercent, setCurFailedTestCasesPercent] = useState<number>(0);

  const { currentTestResults } = useConfig();
  useEffect(() => {
    async function fetchData() {
      
      const currentTotalTests = currentTestResults?.total?? null;
      setCurTotalTestCases(currentTotalTests);
      
      if (currentTotalTests !== null && currentTotalTests > 300) {
        setTotalTestCasesColor(constants.GREEN_COLOR);
      } else if (currentTotalTests !== null && currentTotalTests > 200) {
        setTotalTestCasesColor(constants.AMBER_COLOR);
      } else {
        setTotalTestCasesColor(constants.RED_COLOR);
      }

      const currentPassedTests = currentTestResults?.passed??null;
      setCurPassedTestCases(currentPassedTests);
      if (currentPassedTests !== null && currentTotalTests !== null && currentTotalTests > 0) {
        setCurPassedTestCasesPercent(Math.round((currentPassedTests / currentTotalTests) * 100));
      } else {
        setCurPassedTestCasesPercent(0); // Default to 0 if values are invalid
      }
      
      const currentFailedCases = currentTestResults?.failed??null;
      setCurFailedTestCases(currentFailedCases);
      if (currentFailedCases !== null && currentTotalTests !== null && currentTotalTests > 0) {
        setCurFailedTestCasesPercent(Math.round((currentFailedCases / currentTotalTests) * 100));
      } else {
        setCurFailedTestCasesPercent(0); // Default to 0 if values are invalid
      }
      
    }
    fetchData();
  }, [currentTestResults?.passed,currentTestResults?.failed,currentTestResults?.total]);

  const data = [
    { name: 'Pass', value: curPassedTestCases },
    { name: 'Fail', value: curFailedTestCases },
  ];

  const COLORS: string[] = [constants.GREEN_COLOR, constants.RED_COLOR]; 

  return (
    <Box sx={{ textAlign: 'center', mb: 2 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
        Total <Box component="span" sx={{ color: totalTestCasesColor }}>{curTotalTestCases}</Box> Test Cases
      </Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', maxWidth: 700, mx: 'auto', position: 'relative' }}>
        <PieChart width={300} height={300}>
          <Pie data={data} cx="50%" cy="50%" outerRadius={120} startAngle={90} endAngle={-270} paddingAngle={2} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 200, ml: 4, textAlign: 'left' }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: constants.RED_COLOR }}>
              Defect Density {curFailedTestCasesPercent}%
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: constants.RED_COLOR }}>
              Failed {curFailedTestCases} Tests
            </Typography>
            <br/>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: constants.GREEN_COLOR }}>
              Passed {curPassedTestCasesPercent}%
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: constants.GREEN_COLOR }}>
              Passed {curPassedTestCases} Tests
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TestCasePieChart;