import * as React from 'react';
import Head from 'next/head';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../src/Link';

export default function Resources() {
  const title = 'Resources | URTC 2023'
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
      </Head>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" color="white" gutterBottom>
            WIP?
          </Typography>
          <Button variant="contained" component={Link} noLinkStyle href="/">
            Go to the main page
          </Button>
        </Box>
      </Container>
    </>
  );
}
