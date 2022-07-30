import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

export default function Contact() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h6" component="h1" color="white" gutterBottom>
          If you have any questions/concerns, contact us at <a href="mailto:ieee-ucc-chairs@mit.edu">ieee-ucc-chairs@mit.edu</a>.
        </Typography>
        <Button variant="contained" component={Link} noLinkStyle href="/">
          Go to the main page
        </Button>
        <Copyright />
      </Box>
    </Container>
  );
}
