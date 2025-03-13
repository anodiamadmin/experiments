import React,{ useEffect, useState } from "react";
import { TotalTestCases, PassedTestCases,FailedTestCases } from './testResultsVariables';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";


const DashboardTestCases = () => {
  const [totalTestCases, setTotalTestCases] = useState(0);
  const [totalTestCasesColor, setTotalTestCasesColor] = useState('');  

  const [passedTestCasesPercent, setpassedTestCasesPercent] = useState(0);
  const [passedTestCasesPercentColor, setpassedTestCasesPercentColor] = useState('');
  
  const [defectDensityPercent, setDefectDensityPercent] = useState(0);
  const [defectDensityPercentColor, setDefectDensityPercentColor] = useState('');

  useEffect(() => {
    async function fetchData() {
      const greenColor='#00FF00';
      const amberColor='#ffbf00';
      const redColor='#FF0000';

      const totalTests = await TotalTestCases;
      setTotalTestCases(totalTests);
      if(totalTests>300)
      {
        setTotalTestCasesColor(greenColor)
      }
      if(totalTests>200 && totalTests<300)
      {
        setTotalTestCasesColor(amberColor)
      }
      if(totalTests<=200)
      {
        setTotalTestCasesColor(redColor)
      }

      const passedTests = await PassedTestCases;
      const passedTestPercent = Math.round((passedTests / totalTests) * 100);
      setpassedTestCasesPercent(passedTestPercent);
      if(passedTestPercent>99)
      {
        setpassedTestCasesPercentColor(greenColor);
      }
      if(passedTestPercent>95 && passedTestPercent<=99)
      {
          setpassedTestCasesPercentColor(amberColor);
      }
      if(passedTestPercent<=95)
      {
          setpassedTestCasesPercentColor(redColor);
      }
      
      const failedTests = await FailedTestCases;
      const defectDensityPer = Math.round((failedTests / totalTests) * 100);
      setDefectDensityPercent(defectDensityPer)
      if(defectDensityPer>=1)
      {
        setDefectDensityPercentColor(greenColor);
      }
      if(defectDensityPer>1 && defectDensityPer<=5)
      {
        setDefectDensityPercentColor(amberColor);
      }
      if(defectDensityPer>5)
      {
        setDefectDensityPercentColor(redColor);
      }

    }
    fetchData();
  }, []);

  // function evaluateStatus(value, thresholds) {
  //   const greenColor='#00FF00';
  //   const amberColor='#ffbf00';
  //   const redColor='#FF0000';
  //   switch (true) {
  //     case thresholds.green(value):
  //       return greenColor;
  //     case thresholds.amber(value):
  //       return amberColor;
  //     case thresholds.red(value):
  //       return redColor;
  //     default:
  //       return 'Unknown';
  //   }
  // }

  const data = [
    { metric: "Total Test Cases", value: totalTestCases,statusColor:totalTestCasesColor },
    { metric: "Passed Test Cases (%)", value: passedTestCasesPercent.toString() + "%",statusColor:passedTestCasesPercentColor},
    { metric: "Defect Density (%)", value: defectDensityPercent.toString() + "%",statusColor:defectDensityPercentColor },
    { metric: "Test Coverage (%)", value: null,statusColor:null },
    { metric: "Defect Leakage (%)", value: null,statusColor:null },
    { metric: "Flaky Tests (%)", value: null,statusColor:null },
    { metric: "Test Optimization (%)", value: null,statusColor:null },
    { metric: "CI/CD Build Verification Rate (%)", value: null ,statusColor:null},
    { metric: "Build Stability (%)", value: null ,statusColor:null},
    { metric: "Pipeline Execution Time", value: null,statusColor:null },
  ];

  return (
    <TableContainer component={Paper} style={{ maxWidth: 800, margin: "20px auto" }}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell
            style={{
              backgroundColor: "yellow",
              fontWeight: "bold",
              textAlign: "center",
              border: "1px solid #000", // Border added
            }}
          >
            Metric
          </TableCell>
          <TableCell
            style={{
              backgroundColor: "yellow",
              fontWeight: "bold",
              textAlign: "center",
              border: "1px solid #000", // Border added
            }}
          >
            Value
          </TableCell>
          <TableCell
            style={{
              backgroundColor: "yellow",
              fontWeight: "bold",
              textAlign: "center",
              border: "1px solid #000", // Border added
            }}
          >
            Status
          </TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index} style={{ border: "1px solid #000" }}>
            <TableCell style={{ border: "1px solid #000" }}>{row.metric}</TableCell>
            <TableCell align="center" style={{ border: "1px solid #000" }}>{row.value}</TableCell>
            <TableCell
              align="center"
              style={{
                backgroundColor: row.statusColor,
                color: "white",
                fontWeight: "bold",
                border: "1px solid #000",
              }}
            >
              {row.status} {/* Optional: display status text/icon */}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
      );
};

export default DashboardTestCases;