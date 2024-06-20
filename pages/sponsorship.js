import * as React from 'react';

import Head from 'next/head';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '../src/Link';

import GlassBox from '../src/GlassBox';
import Sponsors from '../src/sponsors/Sponsors';

export default function Sponsorship() {
  const title = 'Sponsorship | URTC 2023'
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
      </Head>
      <Container maxWidth="md">
        <GlassBox sx={{ my: 4, mx: 0 }} background="rgba(30,30,30,0.5)">
          <Typography variant="h4" component="h1" color="white" gutterBottom>
            Sponsorship
          </Typography>
          <Typography variant="string" paragraph="true" color="white" gutterBottom>
            MIT URTC has grown its influence in the last decade, reaching to hundreds of submissions and even students internationally. We have received past partnerships from Microsoft, Lockheed Martin, Two Sigma Investments, and Analog Devices. When you sponsor, you help every aspect of the event come together. Contributions go towards providing t-shirts and cater- ing services, renting out the venue and necessary equipment, publishing the conference proceedings, and countless other ex- penses associated with running a conference. With your help, we can make the 2024 Undergraduate Research Technology Conference our best conference yet!
          </Typography>
          <Button variant="outlined" size="large" sx={{color: 'white', borderColor: 'white'}} component={Link} noLinkStyle href="/sponsorship.pdf">
            View Sponsorship Packet
          </Button>
        </GlassBox>
        <Sponsors page={true}/>
      </Container>
    </>
  );
}
