import React from 'react';
import { Box, Typography, Link } from '@mui/material';

export const OtherReleasesSection = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Other releases
      </Typography>

      <Box sx={{ ml: 2 }}>
        {/* Project 1 */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            • {'<Project Name>'}:
          </Typography>
          <Box sx={{ ml: 2, display: 'flex', flexDirection: 'column' }}>
            <Link href="#" underline="hover" sx={{ mb: 0.5 }}>
              {'<Version (yy.mm.##)>'}
            </Link>
            <Link href="#" underline="hover" sx={{ mb: 0.5 }}>
              {'<Version (yy.mm.##)>'}
            </Link>
            <Link href="#" underline="hover" sx={{ mb: 0.5 }}>
              {'<Version (yy.mm.##)>'}
            </Link>
            <Link href="#" underline="hover" sx={{ mb: 0.5 }}>
              {'<Version (yy.mm.##)>'}
            </Link>
          </Box>
        </Box>

        {/* Project 2 */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            • {'<Project Name>'}:
          </Typography>
          <Box sx={{ ml: 2, display: 'flex', flexDirection: 'column' }}>
            <Link href="#" underline="hover" sx={{ mb: 0.5 }}>
              {'<Version (yy.mm.##)>'}
            </Link>
            <Link href="#" underline="hover" sx={{ mb: 0.5 }}>
              {'<Version (yy.mm.##)>'}
            </Link>
            <Link href="#" underline="hover" sx={{ mb: 0.5 }}>
              {'<Version (yy.mm.##)>'}
            </Link>
            <Link href="#" underline="hover" sx={{ mb: 0.5 }}>
              {'<Version (yy.mm.##)>'}
            </Link>
          </Box>
        </Box>

        {/* Project 3 */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            • {'<Project Name>'}:
          </Typography>
          <Box sx={{ ml: 2, display: 'flex', flexDirection: 'column' }}>
            <Link href="#" underline="hover" sx={{ mb: 0.5 }}>
              {'<Version (yy.mm.##)>'}
            </Link>
            <Link href="#" underline="hover" sx={{ mb: 0.5 }}>
              {'<Version (yy.mm.##)>'}
            </Link>
            <Link href="#" underline="hover" sx={{ mb: 0.5 }}>
              {'<Version (yy.mm.##)>'}
            </Link>
            <Link href="#" underline="hover" sx={{ mb: 0.5 }}>
              {'<Version (yy.mm.##)>'}
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};