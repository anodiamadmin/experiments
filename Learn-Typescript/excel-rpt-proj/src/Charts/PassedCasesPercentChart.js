import React,{ useEffect, useState } from "react";
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
import { historyTotalTestCases,historyPassedTestCases } from './testCaseHistoryResults';

const PassedCasesPercentChart = () => {
  const [passedTestCases_1, setPassedTestCases_1] = useState(0);
  const [passedTestCases_2, setPassedTestCases_2] = useState(0);
  const [passedTestCases_3, setPassedTestCases_3] = useState(0);
  const [passedTestCases_4, setPassedTestCases_4] = useState(0);
  const [passedTestCases_5, setPassedTestCases_5] = useState(0);
  const [passedTestCases_6, setPassedTestCases_6] = useState(0);

  useEffect(() => {
    async function fetchData() {

      let totalTests = await historyTotalTestCases[0];
      let passedTests= await historyPassedTestCases[0]
      let passedTestPercent = Math.round((passedTests / totalTests) * 100);
      setPassedTestCases_1(passedTestPercent);
      
      totalTests = await historyTotalTestCases[1];
      passedTests= await historyPassedTestCases[1]
      passedTestPercent = Math.round((passedTests / totalTests) * 100);
      setPassedTestCases_2(passedTestPercent);
      
      totalTests = await historyTotalTestCases[2];
      passedTests= await historyPassedTestCases[2]
      passedTestPercent = Math.round((passedTests / totalTests) * 100);
      setPassedTestCases_3(passedTestPercent);

      totalTests = await historyTotalTestCases[3];
      passedTests= await historyPassedTestCases[3]
      passedTestPercent = Math.round((passedTests / totalTests) * 100);
      setPassedTestCases_4(passedTestPercent);

      totalTests = await historyTotalTestCases[4];
      passedTests= await historyPassedTestCases[4]
      passedTestPercent = Math.round((passedTests / totalTests) * 100);
      setPassedTestCases_5(passedTestPercent);

      totalTests = await historyTotalTestCases[5];
      passedTests= await historyPassedTestCases[5]
      passedTestPercent = Math.round((passedTests / totalTests) * 100);
      setPassedTestCases_6(passedTestPercent);

    }
    fetchData();
  }, []); // dependencies array

  const data = [
    { name: 'Sep-2024', value: passedTestCases_1 },
    { name: 'Oct-2024', value: passedTestCases_2 },
    { name: 'Nov-2024', value: passedTestCases_3 },
    { name: 'Dec-2024', value: passedTestCases_4 },
    { name: 'Jan-2025', value: passedTestCases_5 },
    { name: 'Feb-2025', value: passedTestCases_6 }
  ];
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h6"><b>Passed Test Cases Percentage for last 6 months</b></Typography>

      <Box display="flex" justifyContent="center" mt={2}>
        <LineChart
          width={800}
          height={400}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          {/* Background colored areas according to thresholds */}
          <ReferenceArea y1={0} y2={95} fill={constants.RED_COLOR} fillOpacity={0.4} />
          <ReferenceArea y1={96} y2={98} fill={constants.AMBER_COLOR} fillOpacity={0.4} />
          <ReferenceArea y1={99} y2={100} fill={constants.GREEN_COLOR} fillOpacity={0.4} />

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

export default PassedCasesPercentChart;