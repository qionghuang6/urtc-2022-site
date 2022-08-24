import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../src/Link';

const lorem = new Array(100).fill(`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`).join(' ');

export default function FAQ() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" color="white" gutterBottom>
          test
        </Typography>
        <Button variant="contained" component={Link} noLinkStyle href="/">
          Go to the main page
        </Button>
        <Typography color="white">
          {lorem}
        </Typography>
      </Box>
    </Container>
  );
}
