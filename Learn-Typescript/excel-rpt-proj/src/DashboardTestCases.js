import React from "react";
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
  
  function calculateTotalTestCases()
  {
    //Calculate the total no of test cases
    return 25;
  }

  const data = [
    { metric: "Total Test Cases", value: calculateTotalTestCases() },
    { metric: "Passed Test Cases (%)", value: 26 },
    { metric: "Defect Density (%)", value: 27 },
    { metric: "Test Coverage (%)", value: 28 },
    { metric: "Defect Leakage (%)", value: 29 },
    { metric: "Flaky Tests (%)", value: 30 },
    { metric: "Test Optimization (%)", value: 31 },
    { metric: "CI/CD Build Verification Rate (%)", value: 32 },
    { metric: "Build Stability (%)", value: 33 },
    { metric: "Pipeline Execution Time", value: 34 },
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
              }}
            >
              Metric
            </TableCell>
            <TableCell
              style={{
                backgroundColor: "yellow",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Value
            </TableCell>
            <TableCell
              style={{
                backgroundColor: "yellow",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Status
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.metric}</TableCell>
              <TableCell align="center">{row.value}</TableCell>
              <TableCell
                align="center"
                style={{
                  backgroundColor: "green",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {/* You can put a status text/icon here if needed */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DashboardTestCases;