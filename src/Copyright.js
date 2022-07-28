import * as React from 'react';
import {Box, Typography} from '@mui/material';

export default function Copyright() {
  return (
    <Box position="absolute" right="2rem" bottom="1rem">
      <a href="https://accessibility.mit.edu/">
        <Typography variant="body2" align="right" color="white" sx={{textDecoration: 'underline'}}>Accessibility</Typography>
      </a>
      <Typography variant="body2" align="right" color="white">
        {'Copyright © '}
        {'IEEE URTC '}
        {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}
