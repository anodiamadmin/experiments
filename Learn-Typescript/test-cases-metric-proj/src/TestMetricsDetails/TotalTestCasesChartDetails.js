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
import { historyTotalTestCases } from '../Utils/extractTestResultsVariables';

const TotalTestCasesChartDetails = () => {
  const [totalTestCases_1, setTotalTestCases_1] = useState(0);
  const [totalTestCases_2, setTotalTestCases_2] = useState(0);
  const [totalTestCases_3, setTotalTestCases_3] = useState(0);
  const [totalTestCases_4, setTotalTestCases_4] = useState(0);
  const [totalTestCases_5, setTotalTestCases_5] = useState(0);
  const [totalTestCases_6, setTotalTestCases_6] = useState(0);

  useEffect(() => {
    async function fetchData() {
      let totalTestCases = await historyTotalTestCases[0];
      setTotalTestCases_1(totalTestCases);
      totalTestCases = await historyTotalTestCases[1];
      setTotalTestCases_2(totalTestCases);
      totalTestCases = await historyTotalTestCases[2];
      setTotalTestCases_3(totalTestCases);
      totalTestCases = await historyTotalTestCases[3];
      setTotalTestCases_4(totalTestCases);
      totalTestCases = await historyTotalTestCases[4];
      setTotalTestCases_5(totalTestCases);
      totalTestCases = await historyTotalTestCases[5];
      setTotalTestCases_6(totalTestCases);
    }
    fetchData();
  }, []); // dependencies array

  const data = [
    { name: 'Sep-2024', value:totalTestCases_1},
    { name: 'Oct-2024', value: totalTestCases_2 },
    { name: 'Nov-2024', value: totalTestCases_3 },
    { name: 'Dec-2024', value: totalTestCases_4 },
    { name: 'Jan-2025', value: totalTestCases_5 },
    { name: 'Feb-2025', value: totalTestCases_6 }
  ];
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h6"><b>Total Test Cases</b></Typography>

      <Box display="flex" justifyContent="center" mt={2}>
        <LineChart
          width={800}
          height={400}
          data={data}
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