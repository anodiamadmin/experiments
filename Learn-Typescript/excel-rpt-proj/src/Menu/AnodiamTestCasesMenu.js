import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  Box,
  Typography,
  MenuList,
  MenuItem,
  Paper,
  Divider,
  Table,
  TableBody,
  TableRow,
  TableCell
} from '@mui/material';

// Icons
import AssessmentIcon from '@mui/icons-material/Assessment';
import BugReportIcon from '@mui/icons-material/BugReport';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import TuneIcon from '@mui/icons-material/Tune';
import VerifiedIcon from '@mui/icons-material/Verified';
import BuildIcon from '@mui/icons-material/Build';
import TimerIcon from '@mui/icons-material/Timer';
import DashboardHeader from '../Dashboard/DashboardHeader'; 

// Menu data with icons
const menuItems = [
  { label: 'Total Test Cases', path: '/menu/total-test-cases', icon: <AssessmentIcon /> },
  { label: 'Defect Density', path: '/menu/defect-density', icon: <BugReportIcon /> },
  { label: 'Test Coverage', path: '/menu/test-coverage', icon: <TrackChangesIcon /> },
  { label: 'Defect Leakage', path: '/menu/defect-leakage', icon: <ReportProblemIcon /> },
  { label: 'Flaky Tests', path: '/menu/flaky-tests', icon: <ShuffleIcon /> },
  { label: 'Test Optimization', path: '/menu/test-optimization', icon: <TuneIcon /> },
  { label: 'CICD Build Verification', path: '/menu/cicd-build-verification', icon: <VerifiedIcon /> },
  { label: 'Build Stability', path: '/menu/build-stability', icon: <BuildIcon /> },
  { label: 'Pipeline Execution Mins', path: '/menu/pipeline-execution-mins', icon: <TimerIcon /> }
];

const AnodiamTestCasesMenu = () => {
  const location = useLocation();

  return (
    <Box sx={{ height: '100vh', backgroundColor: '#f4f6f8' }}>
      {/* Dashboard Header */}
      <Box sx={{ flexShrink: 0 }}>
        <DashboardHeader />
      </Box>

      {/* Layout Table: Sidebar + Content */}
      <Table sx={{ height: 'calc(100vh - 64px)' /* Adjust header height if needed */ }}>
        <TableBody>
          <TableRow>
            {/* Sidebar */}
            <TableCell
              sx={{
                width: 280,
                border: 'none',
                verticalAlign: 'top',
                p: 0
              }}
            >
              <Paper
                elevation={4}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '0 12px 12px 0',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #0d47a1 30%, #1976d2 90%)',
                  color: '#fff',
                  p: 3
                }}
              >
                {/* Back to Dashboard Link */}
                <Box sx={{ mb: 4, textAlign: 'center' }}>
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#ffffff',
                        fontWeight: 'bold',
                        '&:hover': { color: '#bbdefb' },
                        transition: 'color 0.3s ease'
                      }}
                    >
                      ← Back to Dashboard
                    </Typography>
                  </Link>
                </Box>

                <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.2)', mb: 3 }} />

                {/* Menu List */}
                <MenuList sx={{ p: 0 }}>
                  {menuItems.map((item, index) => {
                    const isActive = location.pathname === item.path;

                    return (
                      <MenuItem
                        key={index}
                        component={Link}
                        to={item.path}
                        selected={isActive}
                        sx={{
                          mb: 1.5,
                          borderRadius: 2,
                          px: 2,
                          py: 1.2,
                          color: isActive ? '#0d47a1' : '#ffffff',
                          backgroundColor: isActive ? '#ffffff' : 'transparent',
                          fontWeight: isActive ? 'bold' : 'normal',
                          boxShadow: isActive ? '0 2px 8px rgba(0,0,0,0.15)' : 'none',
                          display: 'flex',
                          alignItems: 'center',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: isActive ? '#f0f0f0' : 'rgba(255, 255, 255, 0.15)',
                            transform: 'translateX(4px)',
                            color: isActive ? '#0d47a1' : '#bbdefb'
                          }
                        }}
                      >
                        {/* Icon */}
                        <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
                          {React.cloneElement(item.icon, {
                            style: { color: isActive ? '#0d47a1' : '#ffffff' }
                          })}
                        </Box>

                        {/* Label */}
                        <Typography
                          variant="body1"
                          sx={{
                            textAlign: 'left',
                            flexGrow: 1,
                            color: isActive ? '#0d47a1' : '#ffffff'
                          }}
                        >
                          {item.label}
                        </Typography>
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Paper>
            </TableCell>

            {/* Main Content Area */}
            <TableCell
              sx={{
                p: 4,
                verticalAlign: 'top',
                backgroundColor: '#f9f9f9',
                border: 'none',
                width: '100%',
                height: '100%'
              }}
            >
              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  overflowY: 'auto',
                  height: '100%'
                }}
              >
                <Outlet />
              </Box>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default AnodiamTestCasesMenu;