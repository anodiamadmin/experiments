import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper
} from '@mui/material';
import TotalTestCasesChart from './TotalTestCasesChart';
import PassedCasesPercentChart from './PassedCasesPercentChart';

const AllCharts = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        width: '90%',               // Responsive width
        maxWidth: '90%',            // Prevents it from shrinking
        margin: '2rem auto',        // Centers the table horizontally + top margin
        maxHeight: '90%',             // Scrolls if it overflows vertically
        overflow: 'auto',           // Scroll behavior
        boxShadow: 3,               // Optional: adds some depth
        borderRadius: '8px'         // Optional: rounded corners
      }}
    >
      <Table stickyHeader aria-label="charts table">
        <TableBody>
          <TableRow>
            <TableCell
              sx={{
                border: '1px solid rgba(224, 224, 224, 1)',
                width: '50%', // Equally split columns
                textAlign: 'center',
                padding: 2
              }}
            >
              <TotalTestCasesChart />
            </TableCell>
            <TableCell
              sx={{
                border: '1px solid rgba(224, 224, 224, 1)',
                width: '50%',
                textAlign: 'center',
                padding: 2
              }}
            >
              <PassedCasesPercentChart />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllCharts;