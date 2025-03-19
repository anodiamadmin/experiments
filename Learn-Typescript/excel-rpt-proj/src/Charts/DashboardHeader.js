import React from 'react';
import {
  Box,
  Typography,
  Link,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import AnodiamLogo from '../Utils/AnodiamLogo.png'; // Make sure the path matches where your image is stored

const DashboardHeader = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, fontFamily: 'Oxygen' }}>
      <Table sx={{ width: '100%', mb: 4 }}>
        <TableBody>
          <TableRow>
            {/* Logo on the left */}
            <TableCell sx={{ width: '100px', borderBottom: 'none' }}>
              <Box
                component="img"
                src={AnodiamLogo}
                alt="Logo"
                sx={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'contain',
                }}
              />
            </TableCell>

            {/* Header content */}
            <TableCell sx={{ borderBottom: 'none' }}>
              <Typography variant="h4" fontWeight="bold" color="#5f5f5f">
                Automation Test Dashboard: SyanGypsee Version Number V1.0.0(25.03.01)
              </Typography>
              <Typography variant="h5" sx={{ mt: 2 }}>
                <strong>Released on:</strong> &lt;25.03.2025&gt; |{' '}
                <strong>Features Released:</strong> &lt;5&gt; |{' '}
                <strong>Known Issues:</strong> &lt;30&gt; |{' '}
                <Link href="#" underline="hover">
                  Link to detail Release Notes
                </Link>
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default DashboardHeader;