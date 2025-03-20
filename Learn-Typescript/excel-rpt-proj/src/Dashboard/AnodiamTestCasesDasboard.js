import React from 'react';
import { Box,Typography,Table,TableBody,TableCell,TableHead,TableRow } from '@mui/material';
import TestCasePieChart from './TestCasePieChart';
import TotalTestCasesChart from './TotalTestCasesChart';
import PassedCasesPercentChart from './PassedCasesPercentChart';
import DashboardHeader from './DashboardHeader';
import OtherReleasesSection from './OtherReleasesSection';
import DetailTrendSelector from './DetailTrendSelector';
import QualityMetrics from './QualityMetrics';

const AnodiamTestCasesDashboard = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, fontFamily: 'Oxygen' }}>
      <Table sx={{ width: '100%' }}>
        {/* Table Header */}
        <TableHead>
          <TableRow>
            <TableCell colSpan={2} sx={{ borderBottom: 'none', p: 0 }}>
              <DashboardHeader />
            </TableCell>
          </TableRow>
        </TableHead>

        {/* Table Body */}
        <TableBody>
          <TableRow>
            {/* Left Panel */}
            <TableCell sx={{ verticalAlign: 'top', width: '50%' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {/* Pie Chart */}
                <Box sx={{ mb: 4 }}>
                  <TestCasePieChart />
                </Box>
                {/* Quality Metrics */}
                <Box sx={{ mb: 3 }}>
                 <QualityMetrics />
                </Box>
                {/* Detail Trend Selector */}
                <DetailTrendSelector />
                {/* Other Releases Section */}
                <OtherReleasesSection />
              </Box>
            </TableCell>

            {/* Right Panel */}
            <TableCell sx={{ verticalAlign: 'top', width: '50%' }}>
              <Box>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Overall Quality Trend
                </Typography>
                <Box sx={{ mb: 4 }}>
                  <TotalTestCasesChart />
                </Box>
                <Box>
                  <PassedCasesPercentChart />
                </Box>
              </Box>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default AnodiamTestCasesDashboard;