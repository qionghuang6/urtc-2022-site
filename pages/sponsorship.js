import * as React from 'react';
import Head from 'next/head';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

export default function Sponsorship() {
  const title = 'Sponsorship | URTC 2022'
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
      </Head>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" color="white" gutterBottom>
            Next.js example
          </Typography>
          <Button variant="contained" component={Link} noLinkStyle href="/">
            Go to the main page
          </Button>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
