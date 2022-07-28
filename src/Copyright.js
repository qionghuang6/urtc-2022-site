import * as React from 'react';
import {Box, Typography} from '@mui/material';

export default function Copyright() {
  return (
    <Box position="fixed" right="1rem" bottom="4px" p="8px" borderRadius="8px" backgroundColor="rgba(0,0,0, 0.7)">
      <a href="https://accessibility.mit.edu/">
        <Typography variant="body2" align="right" color="white" sx={{textDecoration: 'underline'}}>Accessibility</Typography>
      </a>
      <Typography variant="body2" align="right" color="white">
        {'© IEEE URTC '}
        {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}
