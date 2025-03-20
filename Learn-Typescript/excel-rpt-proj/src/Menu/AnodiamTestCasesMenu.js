import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Box, Typography, Table, TableBody, TableRow, TableCell } from '@mui/material';

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

const AnodiamTestCasesMenu = () => {
  const location = useLocation();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        height: '100vh'
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          width: { xs: '100%', md: '250px' },
          backgroundColor: '#f0f0f0',
          borderRight: { md: '1px solid #ccc' },
          p: 2,
          boxSizing: 'border-box'
        }}
      >
        <Table sx={{ width: '100%' }}>
          <TableBody>
            <TableRow>
              <TableCell sx={{ backgroundColor: '#e0e0e0', textAlign: 'center' }}>
                <Link to="/" style={{ textDecoration: 'none', color: '#0d47a1' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    Back to Dashboard
                  </Typography>
                </Link>
              </TableCell>
            </TableRow>

            {menuItems.map((item, index) => (
              <TableRow key={index}>
                <TableCell
                  sx={{
                    backgroundColor:
                      location.pathname === item.path ? '#bdbdbd' : '#ccc',
                    '&:hover': { backgroundColor: '#bdbdbd' },
                    cursor: 'pointer',
                    textAlign: 'center'
                  }}
                >
                  <Link
                    to={item.path}
                    style={{
                      textDecoration: 'none',
                      color: '#333',
                      display: 'block',
                      fontWeight: 500
                    }}
                  >
                    <Typography variant="body1">{item.label}</Typography>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>

      {/* Main content */}
      <Box
        sx={{
          flexGrow: 1,
          overflow: 'auto',
          p: 2,
          backgroundColor: '#fafafa'
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AnodiamTestCasesMenu;