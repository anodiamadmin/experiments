import React,{ useEffect, useState } from "react";
import { total,covered,found_in_testing,found_in_production } from './extractTestResultsVariables';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import * as constants from '../Utils/ConstantsAnodiam';

const QualityMetrics = () => {
  const [testCoveragePercent, setTestCoveragePercent] = useState(0);
  const [testCoveragePercentColor, setTestCoveragePercentColor] = useState('');

  const [defectLeakagePercent, setDefectLeakagePercent] = useState(0);
  const [defectLeakagePercentColor, setDefectLeakagePercentColor] = useState('');

  useEffect(() => {
    async function fetchData() {
      const greenColor=constants.GREEN_COLOR;
      const amberColor=constants.AMBER_COLOR;
      const redColor=constants.RED_COLOR;

      const totalLinesOfCode=await total;
      const linesOfCodeTested=await covered;
      const testCoveragePer=Math.round((linesOfCodeTested/totalLinesOfCode)*100)
      setTestCoveragePercent(testCoveragePer)
      if(testCoveragePer>90)
      {
        setTestCoveragePercentColor(greenColor);
      }
      if(testCoveragePer>70 && testCoveragePer<=90)
      {
        setTestCoveragePercentColor(amberColor);
      }
      if(testCoveragePer<=75)
      {
        setTestCoveragePercentColor(redColor);
      }

      const defect_found_in_testing=await found_in_testing;
      const defect_found_in_production=await found_in_production;
      const defectLeakagePer=Math.round((defect_found_in_production/(defect_found_in_production + defect_found_in_testing))*100)
      setDefectLeakagePercent(defectLeakagePer)
      //< 1%	< 5%	>= 5%
      if(defectLeakagePer<1)
      {
        setDefectLeakagePercentColor(greenColor);
      }
      if(defectLeakagePer>1 && defectLeakagePer<5)
      {
        setDefectLeakagePercentColor(amberColor);
      }
      if(defectLeakagePer>=5)
      {
        setDefectLeakagePercentColor(redColor);
      }
  
    }
    fetchData();
  }, []);

  const data = [
    { metric: "Test Coverage (%)", value: testCoveragePercent.toString() + "%",statusColor:testCoveragePercentColor },
    { metric: "Defect Leakage (%)", value: defectLeakagePercent.toString() + "%",statusColor:defectLeakagePercentColor },
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

export default QualityMetrics;