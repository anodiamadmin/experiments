import React,{useState} from 'react'
import { Box,Typography,Select,MenuItem,Button } from '@mui/material';

export const DetailTrendSelector = () => {
    const [selectedReleases, setSelectedReleases] = useState(3);

    const handleSelectChange = (event) => {
        setSelectedReleases(event.target.value);
    };

    const handleGoClick = () => {
        console.log(`Fetching data for last ${selectedReleases} releases`);
    };
    return (
        <Box sx={{ display: 'flex',alignItems: 'center',flexWrap: 'wrap',gap: 1,mt: 2 }}>
            <Typography variant="subtitle1">Detail Trend: Last</Typography>
            <Select value={selectedReleases} onChange={handleSelectChange} size="small" sx={{ width: 80 }}>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={12}>12</MenuItem>
                <MenuItem value={48}>48</MenuItem>
            </Select>
            <Typography variant="subtitle1">Releases</Typography>
            <Button variant="contained" onClick={handleGoClick} 
                sx={{ backgroundColor: '#444', color: '#fff', fontWeight: 'bold', '&:hover': { backgroundColor: '#333' },
                        px: 3, py: 1, borderRadius: '5px', boxShadow: '2px 2px 5px rgba(0,0,0,0.4)' }}
            >
                GO
            </Button>
        </Box>
  )
}
