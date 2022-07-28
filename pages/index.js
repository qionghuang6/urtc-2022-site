import * as React from 'react';
import {
  Container,
  Box,
  Typography
  } from '@mui/material';
import Banner from '../src/Banner';

export default function Index() {
  return (
    <>
      <Container maxWidth="xl">
        <Banner />
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" color="white" gutterBottom>
            Hello world!
          </Typography>
        </Box>
      </Container>
    </>
  );
}
