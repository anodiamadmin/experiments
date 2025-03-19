import React, { useEffect, useState } from "react";
import { Paper, Typography } from '@mui/material';
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
import { historyTotalTestCases, historyPassedTestCases } from './testCaseHistoryResults';

const PassedCasesPercentChart = () => {
  const [passedTestCases, setPassedTestCases] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const percentages = [];

      for (let i = 0; i < historyTotalTestCases.length; i++) {
        const totalTests = await historyTotalTestCases[i];
        const passedTests = await historyPassedTestCases[i];
        const passedTestPercent = Math.round((passedTests / totalTests) * 100);
        percentages.push(passedTestPercent);
      }

      setPassedTestCases(percentages);
    }

    fetchData();
  }, []);

  const months = ['Sep-2024', 'Oct-2024', 'Nov-2024', 'Dec-2024', 'Jan-2025', 'Feb-2025'];

  const data = months.map((month, index) => ({
    name: month,
    value: passedTestCases[index] || 0
  }));

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h6">
        <b>Passed Test Cases Percentage for last 6 months</b>
      </Typography>

      <LineChart
        width={800}
        height={400}
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        {/* Color-coded areas for percentage ranges */}
        <ReferenceArea y1={0} y2={95} fill={constants.RED_COLOR} fillOpacity={0.4} />
        <ReferenceArea y1={95} y2={98} fill={constants.AMBER_COLOR} fillOpacity={0.4} />
        <ReferenceArea y1={98} y2={100} fill={constants.GREEN_COLOR} fillOpacity={0.4} />

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 100]} tickCount={11} interval="preserveStartEnd" />
        <Tooltip />

        <Line
          type="monotone"
          dataKey="value"
          stroke="#000"
          strokeWidth={2}
          dot={{ r: 4 }}
        />
      </LineChart>
    </Paper>
  );
};

export default PassedCasesPercentChart;