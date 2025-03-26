import React from 'react';
import {
  Box,
  Typography,
  Link,
  Table,
  TableBody,
  TableRow,
  TableCell
} from '@mui/material';
import AnodiamLogo from '../Utils/AnodiamLogo.png';

const DashboardHeader: React.FC = () => {
  return (
    <Table sx={{ width: '100%', mb: 4, fontFamily: 'Oxygen' }}>
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
          <TableCell sx={{ borderBottom: 'none', textAlign: 'left', verticalAlign: 'middle' }}>
            <Typography variant="h4" fontWeight="bold" color="#5f5f5f">
              Automation Test Dashboard: SyanGypsee Version Number V1.0.0(25.03.01)
            </Typography>
            <Typography variant="h5" sx={{ mt: 2 }}>
              <strong>Released on: 25.03.2025</strong>&nbsp;&nbsp;&nbsp;&nbsp;
              <strong>Features Released: 5</strong>&nbsp;&nbsp;&nbsp;&nbsp;
              <strong>Known Issues: 30</strong>&nbsp;&nbsp;&nbsp;&nbsp;
              <Link href="#" underline="hover">
                Link to detail Release Notes
              </Link>
            </Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default DashboardHeader;