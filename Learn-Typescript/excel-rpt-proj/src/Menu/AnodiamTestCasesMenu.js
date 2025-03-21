import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  Box,
  Typography,
  MenuList,
  MenuItem,
  Paper,
  Divider
} from '@mui/material';

const menuItems = [
  { label: 'Total Test Cases', path: '/menu/total-test-cases' },
  { label: 'Defect Density', path: '/menu/defect-density' },
  { label: 'Test Coverage', path: '/menu/test-coverage' },
  { label: 'Defect Leakage', path: '/menu/defect-leakage' },
  { label: 'Flaky Tests', path: '/menu/flaky-tests' },
  { label: 'Test Optimization', path: '/menu/test-optimization' },
  { label: 'CICD Build Verification', path: '/menu/cicd-build-verification' },
  { label: 'Build Stability', path: '/menu/build-stability' },
  { label: 'Pipeline Execution Mins', path: '/menu/pipeline-execution-mins' }
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
      <Paper
        elevation={3}
        sx={{
          width: { xs: '100%', md: 250 },
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        {/* Back to Dashboard */}
        <Box sx={{ mb: 2 }}>
          <Link
            to="/"
            style={{ textDecoration: 'none', color: '#0d47a1' }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 'bold',
                textAlign: 'center',
                '&:hover': { textDecoration: 'underline' }
              }}
            >
              Back to Dashboard
            </Typography>
          </Link>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Menu Items */}
        <MenuList>
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
              sx={{
                justifyContent: 'center',
                backgroundColor:
                  location.pathname === item.path ? '#e0e0e0' : 'transparent',
                '&:hover': {
                  backgroundColor: '#f5f5f5'
                }
              }}
            >
              <Typography variant="body1">{item.label}</Typography>
            </MenuItem>
          ))}
        </MenuList>
      </Paper>

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
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