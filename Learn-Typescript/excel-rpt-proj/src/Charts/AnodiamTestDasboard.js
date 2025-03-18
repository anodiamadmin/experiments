import React, { useState } from 'react';
import {
  Box,
  Typography,
  Select,
  MenuItem,
  Button,
  Link,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import TestCasePieChart from './TestCasePieChart';
import TotalTestCasesChart from './TotalTestCasesChart';
import PassedCasesPercentChart from './PassedCasesPercentChart';

const AnodiamTestDasboard = () => {
  const [selectedReleases, setSelectedReleases] = useState(3);

  const handleSelectChange = (event) => {
    setSelectedReleases(event.target.value);
  };

  const handleGoClick = () => {
    console.log(`Fetching data for last ${selectedReleases} releases`);
  };

  return (
    <Box sx={{ padding: 4, fontFamily: 'Arial' }}>
      

      {/* //Sub Header Info
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        <strong>Released on:</strong> &lt;Release Date&gt; | <strong>Features Released:</strong> &lt;Number&gt; | <strong>Known Issues:</strong> &lt;Number&gt; |{' '}
        <Link href="#" underline="hover">Link to detail Release Notes</Link>
      </Typography> */}

      {/* Table Layout Section */}
      <Table sx={{ width: '100%' }}>
        <TableBody>
          <TableRow>
            <TableCell colSpan={2} align="center">
              {/* Header Section */}
                <Typography variant="h4" fontWeight="bold" color="#5f5f5f">
                  Automation Test Dashboard: SyanGypsee  Version Number V1.0.0(25.03.01)
                </Typography>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  <strong>Released on:</strong> &lt;25.03.2025&gt; | <strong>Features Released:</strong> &lt;5&gt; | <strong>Known Issues:</strong> &lt;30&gt; |{' '}
                  <Link href="#" underline="hover">Link to detail Release Notes</Link>
                </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            {/* Left Side */}
            <TableCell sx={{ verticalAlign: 'top', width: '50%' }}>
              {/* Pie Chart */}
              <TestCasePieChart />
              {/* Quality Metrics */}
              <Box sx={{ mb: 3 }}>
                              {[
                  'Test Coverage %',
                  'Defect Leakage %',
                  'Flaky Tests %',
                  'Test Optimization %',
                  'CICD Build Verificn %',
                  'Build Stability %',
                  'Pipeline Exec Mins',
                ].map((label, idx) => (
                  <Typography key={idx} variant="body1" sx={{ mb: 1 }}>
                    {label} <Box component="span" sx={{ color: 'red' }}>&lt;#&gt;</Box>
                  </Typography>
                ))}
              </Box>
              {/* Detail Trend Selector */}
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <Typography variant="subtitle1">Detail Trend: Last</Typography>
                <Select
                  value={selectedReleases}
                  onChange={handleSelectChange}
                  size="small"
                  sx={{ mx: 1, width: 80 }}
                >
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={12}>12</MenuItem>
                  <MenuItem value={48}>48</MenuItem>
                </Select>
                <Typography variant="subtitle1">Releases</Typography>
                <Button
                  variant="contained"
                  onClick={handleGoClick}
                  sx={{
                    ml: 2,
                    backgroundColor: '#444',
                    color: '#fff',
                    fontWeight: 'bold',
                    '&:hover': { backgroundColor: '#333' },
                    px: 3,
                    py: 1,
                    borderRadius: '5px',
                    boxShadow: '2px 2px 5px rgba(0,0,0,0.4)',
                  }}
                >
                  GO
                </Button>
              </Box>
                {/* Other Releases Section */}
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Other releases
                </Typography>

                <Box sx={{ ml: 2 }}>
                  {['<Project Name>', '<Project Name>', '<Project Name>'].map((project, idx) => (
                    <Box key={idx} sx={{ mb: 2 }}>
                      <Typography variant="subtitle1" sx={{ mb: 1 }}>
                        • {project}:
                      </Typography>
                      <Box sx={{ ml: 2, display: 'flex', flexDirection: 'column' }}>
                        {['<Version (yy.mm.##)>', '<Version (yy.mm.##)>', '<Version (yy.mm.##)>', '<Version (yy.mm.##)>', '<Version (yy.mm.##)>', '<Version (yy.mm.##)>'].map((version, index) => (
                          <Link key={index} href="#" underline="hover" sx={{ mb: 0.5 }}>
                            {version}
                          </Link>
                        ))}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </TableCell>

            {/* Right Side */}
            <TableCell sx={{ verticalAlign: 'top', width: '50%' }}>
              {/* Overall Quality Trend */}
              <Typography variant="h6" sx={{ mb: 1 }}>
                Overall Quality Trend
              </Typography>
              <Box sx={{ mb: 3 }}>
                <TotalTestCasesChart />
              </Box>
              <Box>
                <PassedCasesPercentChart />
              </Box>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

    
    </Box>
  );
};

export default AnodiamTestDasboard;