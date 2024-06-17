import * as React from 'react';
import Head from 'next/head';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import GlassBox from '../src/GlassBox';

import Organizers from '../src/organizers/Organizers';

export default function About() {
  const title = 'Team | URTC 2024'
  return (
    <>
      {/* <Typography variant='h5' marginBottom='20px'>
          <hr align='left' style={{width: mobile? '400px':'900px', height:'6px', backgroundColor: 'white'}}></hr>
        </Typography> */}
        
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
      </Head>
      <Container >
        <GlassBox sx={{ my: 4, mx: 0 }} background="rgba(30,30,30,0.5)">

          <Organizers/>


          <br></br>
          <Button sx={{color: 'white', borderColor: 'white'}} size="large" variant="outlined" component={Link} noLinkStyle href="/">
            Return to the main page
          </Button>
        </GlassBox>
        <Box paddingBottom="3rem"></Box>
      </Container>
    </>
  );
}
