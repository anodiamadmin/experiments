import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableRow, TableCell, Typography } from '@mui/material';

const AnodiamTestCasesMenu = () => {
  const menuItems = [
    { label: 'Total Test Cases', path: '/total-test-cases' },
    { label: 'Defect Density', path: '/defect-density' },
    { label: 'Test Coverage', path: '/test-coverage' },
    { label: 'Defect Leakage', path: '/defect-leakage' },
    { label: 'Flaky Tests', path: '/flaky-tests' },
    { label: 'Test Optimization', path: '/test-optimization' },
    { label: 'CICD Build Verification', path: '/cicd-build-verification' },
    { label: 'Build Stability', path: '/build-stability' },
    { label: 'Pipeline Execution Mins', path: '/pipeline-execution-mins' }
  ];

  return (
    <Table sx={{ width: '250px', border: '1px solid #ccc' }}>
      <TableBody>
        <TableRow>
          <TableCell sx={{ backgroundColor: '#f0f0f0' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#0d47a1' }}>
              <Typography variant="subtitle1">Back to Current Release</Typography>
            </Link>
          </TableCell>
        </TableRow>
        {menuItems.map((item, index) => (
          <TableRow key={index}>
            <TableCell
              sx={{
                backgroundColor: '#ccc',
                '&:hover': { backgroundColor: '#bdbdbd' },
                cursor: 'pointer'
              }}
            >
              <Link to={item.path} style={{ textDecoration: 'none', color: '#333' }}>
                <Typography variant="body1">{item.label}</Typography>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AnodiamTestCasesMenu;