import * as React from 'react';
import Head from 'next/head';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

import GlassBox from '../src/GlassBox';
import Sponsors from '../src/sponsors/Sponsors';


export default function URTC() {
  const title = '2022 Info | URTC 2022'
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
      </Head>
      <Container maxWidth="md">
        <GlassBox sx={{ my: 4, mx: 0 }} background="rgba(30,30,30,0.5)">
          <Typography variant="h4" component="h1" color="white" gutterBottom>
            MIT IEEE URTC / Information
          </Typography>
          <Typography variant="string" paragraph="true" color="white" gutterBottom>
            Welcome to the MIT IEEE Undergraduate Research Technology Conference! On this website, you'll find all the resources and links you'll need for the weekend. It will be updated at the end of each night.
          </Typography>
          <Button variant="outlined" size="large" sx={{color: 'white', borderColor: 'white', mx: '6px'}} component={Link} noLinkStyle href="https://bit.ly/slackurtc">
            Slack
          </Button>
          <Button variant="outlined" size="large" sx={{color: 'white', borderColor: 'white', mx: '6px'}} component={Link} noLinkStyle href="https://drive.google.com/drive/folders/1R-gwb47WF5-aWj-xE-d3cb-cmzUBvDKN?usp=sharing">
            Program Table & Schedule
          </Button>
          <Button variant="outlined" size="large" sx={{color: 'white', borderColor: 'white', mx: '6px'}} component={Link} noLinkStyle href="https://visitors.mit.edu/?event=53baaf2e-c3b7-4f52-8577-3f235c2ef92f">
            Tim Tickets
          </Button>
          <br></br>
          <br></br>
          <Typography variant="string" component="h1" color="white" gutterBottom>
            Friday, September 30
          </Typography>
          <Typography variant="string" paragraph="true" color="white" gutterBottom>
          <b>02:00PM - 03:30PM</b>  | MIT Tour #1 @ Stata Center (TSMC Lobby) <br/>
          <b>03:30PM - 05:00PM</b> | MIT Tour #2 @ Stata Center (TSMC Lobby) <br/>
          <b>06:00PM - 06:30PM</b> | Registration @ Stata Center <br/>
          <b>06:30PM - 08:30PM</b> | Welcome Reception @ Stata Center <br/>
          <b>08:30PM - 10:00PM</b> | Presentation Check @ 32-123 <br/>
          <br></br>
          <Button variant="outlined" size="large" sx={{color: 'white', borderColor: 'white', mx: '6px'}} component={Link} noLinkStyle href="https://us06web.zoom.us/j/86345266326?pwd=R3A5TzEzcWZWMFFESHZoWFZ3ek1CUT09">
            Welcome Reception (Virtual)
          </Button>
          <Button variant="outlined" size="large" sx={{color: 'white', borderColor: 'white', mx: '6px'}} component={Link} noLinkStyle href="https://forms.gle/SXBjnCEvgYFWb9sT9">
            MIT Tours Sign-Up
          </Button>
          </Typography>
          <Typography variant="string" component="h1" color="white" gutterBottom>
            Saturday, October 1
          </Typography>
          <Typography variant="string" paragraph="true" color="white" gutterBottom>
           <i>Stay tuned for more updates!</i>
          </Typography>
          <Typography variant="string" component="h1" color="white" gutterBottom>
            Sunday, October 2
          </Typography>
          <Typography variant="string" paragraph="true" color="white" gutterBottom>
           <i>Stay tuned for more updates!</i>
          </Typography>
        </GlassBox>
      </Container>
    </>
  );
}
