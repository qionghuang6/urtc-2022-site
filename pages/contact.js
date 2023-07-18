import * as React from 'react';
import Head from 'next/head';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

import GlassBox from '../src/GlassBox';

export default function Contact() {
  const title = 'Contact | URTC 2023'
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
      </Head>
      <Container maxWidth="md">
        <GlassBox sx={{ my: 4 }}>
          <Typography variant="h5" component="h1" color="white" marginBottom="1rem">
            If you have any questions/concerns, contact us at:  <a href="mailto:ieee-ucc-chairs@mit.edu"><Typography variant="h5" component="h1" color="white">ieee-ucc-chairs@mit.edu</Typography></a>
          </Typography>
          <Button sx={{color: 'white', borderColor: 'white'}} variant="outlined" size="large" component={Link} noLinkStyle href="/">
            Return to the main page
          </Button>
        </GlassBox>
      </Container>
    </>
  );
}
