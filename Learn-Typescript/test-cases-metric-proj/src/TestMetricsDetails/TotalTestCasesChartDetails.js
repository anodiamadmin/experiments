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
import { historyTotalTestCases } from '../Utils/extractDashboardInfo';

const TotalTestCasesChartDetails = () => {
  const [totalTestCases, setTotalTestCases] = useState(() => new Array(6).fill(0));

  useEffect(() => {
    async function fetchData() {
      try {
        if (!Array.isArray(historyTotalTestCases) || historyTotalTestCases.length === 0) {
          console.error("Error: historyTotalTestCases is not a valid array");
          return;
        }
  
        const newTotalTestCases = await Promise.all(
          historyTotalTestCases.map(async (testCase) => testCase ?? 0)
        );
  
        setTotalTestCases(newTotalTestCases);
      } catch (error) {
        console.error("Error fetching test cases:", error);
      }
    }
  
    fetchData();
  }, []);
  
 const XAxisValues=['Sep-2024', 'Oct-2024', 'Nov-2024', 'Dec-2024', 'Jan-2025', 'Feb-2025'];

 const totalCasesData = totalTestCases.map((value, index) => ({
    name: XAxisValues[index],
    value,
  }));
  
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h6"><b>Total Tested Test Cases for last 6 months</b></Typography>

      <Box display="flex" justifyContent="center" mt={2}>
        <LineChart
          width={800}
          height={400}
          data={totalCasesData}
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

export default TotalTestCasesChartDetails;