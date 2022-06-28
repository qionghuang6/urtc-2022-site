import * as React from 'react';
import {
  Container,
  Box,
  Typography
  } from '@mui/material';
import Copyright from '../src/Copyright';
import Banner from '../src/Banner';

export default function Index() {
  return (
    <Container maxWidth="xl">
      <Banner />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Hello world!
        </Typography>
      </Box>
      <Copyright/>
    </Container>
  );
}
