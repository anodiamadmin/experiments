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
import { historyFailedTestCases,historyTotalTestCases } from '../Utils/extractDashboardInfo';

const DefectDensityChartDetails = () => {
  const [defectDensityPercent_1, setDefectDensityPercent_1] = useState(0);
  const [defectDensityPercent_2, setDefectDensityPercent_2] = useState(0);
  const [defectDensityPercent_3, setDefectDensityPercent_3] = useState(0);
  const [defectDensityPercent_4, setDefectDensityPercent_4] = useState(0);
  const [defectDensityPercent_5, setDefectDensityPercent_5] = useState(0);
  const [defectDensityPercent_6, setDefectDensityPercent_6] = useState(0);

  useEffect(() => {
    async function fetchData() {
      let totalTestCases = await historyTotalTestCases[0];
      let failedTestCases = await historyFailedTestCases[0];
      let defectDensityPercent = Math.round((failedTestCases / totalTestCases) * 100);
      setDefectDensityPercent_1(defectDensityPercent);
      
      totalTestCases = await historyTotalTestCases[1];
      failedTestCases = await historyFailedTestCases[1];
      defectDensityPercent = Math.round((failedTestCases / totalTestCases) * 100);
      setDefectDensityPercent_2(defectDensityPercent);

      totalTestCases = await historyTotalTestCases[2];
      failedTestCases = await historyFailedTestCases[2];
      defectDensityPercent = Math.round((failedTestCases / totalTestCases) * 100);
      setDefectDensityPercent_3(defectDensityPercent);

      totalTestCases = await historyTotalTestCases[3];
      failedTestCases = await historyFailedTestCases[3];
      defectDensityPercent = Math.round((failedTestCases / totalTestCases) * 100);
      setDefectDensityPercent_4(defectDensityPercent);

      totalTestCases = await historyTotalTestCases[4];
      failedTestCases = await historyFailedTestCases[4];
      defectDensityPercent = Math.round((failedTestCases / totalTestCases) * 100);
      setDefectDensityPercent_5(defectDensityPercent);

      totalTestCases = await historyTotalTestCases[5];
      failedTestCases = await historyFailedTestCases[5];
      defectDensityPercent = Math.round((failedTestCases / totalTestCases) * 100);
      setDefectDensityPercent_6(defectDensityPercent);

    }
    fetchData();
  }, []); // dependencies array

  const data = [
    { name: 'Sep-2024', value: defectDensityPercent_1},
    { name: 'Oct-2024', value: defectDensityPercent_2 },
    { name: 'Nov-2024', value: defectDensityPercent_3 },
    { name: 'Dec-2024', value: defectDensityPercent_4 },
    { name: 'Jan-2025', value: defectDensityPercent_5 },
    { name: 'Feb-2025', value: defectDensityPercent_6 }
  ];
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h6"><b>Defect Density</b></Typography>

      <Box display="flex" justifyContent="center" mt={2}>
        <LineChart
          width={800}
          height={400}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          {/* Background colored areas according to thresholds */}
          <ReferenceArea y1={6} y2={100} fill={constants.RED_COLOR} fillOpacity={0.4} />
          <ReferenceArea y1={2} y2={5} fill={constants.AMBER_COLOR} fillOpacity={0.4} />
          <ReferenceArea y1={0} y2={1} fill={constants.GREEN_COLOR} fillOpacity={0.4} />

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

export default DefectDensityChartDetails;