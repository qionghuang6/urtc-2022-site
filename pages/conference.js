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

import InfoIcon from '@mui/icons-material/Info';

import LiveTvIcon from '@mui/icons-material/LiveTv';

import Calendar from '../src/Calendar';

export default function URTC({events}) {
  const title = '2022 Info | URTC 2023'
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
      </Head>
      <Container maxWidth="md">
        <GlassBox sx={{ my: 4, mx: 0 }} background="rgba(30,30,30,0.5)">
          <Typography variant="h4" component="h1" color="white" gutterBottom>
          <InfoIcon /> MIT IEEE URTC / Information
          </Typography>
          <Typography variant="string" paragraph="true" color="white" gutterBottom>
            Welcome to the MIT IEEE Undergraduate Research Technology Conference! On this page, you'll find all the resources and links you'll need for the weekend. It will be updated at the end of each night.
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
          { events.items && events.items.length > 0 && (
          <GlassBox background="rgba(0,0,0, 0.5)" sx={{ paddingTop: '8px', paddingBottom: '0px', paddingX: '0px', marginX: 0 }}>
          <Typography align="center" variant="string" component="h1" color="white" gutterBottom  sx={{marginBottom: '4px'}}>
            Happening Now!:
          </Typography>
          <Box sx={{ overflow: 'scroll', height: 'fit-content' }}>
            <Calendar events={events} onlyNow={true}/>
          </Box>
          </GlassBox>)}
          <Typography variant="string" component="h1" color="white" gutterBottom  sx={{marginBottom: '4px'}}>
            Saturday, October 1
          </Typography>
          <Button variant="outlined" size="large" sx={{color: 'white', borderColor: 'white', mx: '6px',  my: '2px'}} component={Link} noLinkStyle href="https://us06web.zoom.us/j/86755594260?pwd=d212N3JBdjExdzBuNFRQd0pIZkVkZz09">
            <LiveTvIcon></LiveTvIcon>&nbsp;32-123 (Zoom)
          </Button>
          <Button variant="outlined" size="large" sx={{color: 'white', borderColor: 'white', mx: '6px',  my: '2px'}} component={Link} noLinkStyle href="https://us06web.zoom.us/j/83949502285?pwd=dzdFdkZjVWhyckIwWTRNc2s0N1Y4Zz09">
            <LiveTvIcon></LiveTvIcon>&nbsp;32-141 (Zoom)
          </Button>
          <Button variant="outlined" size="large" sx={{color: 'white', borderColor: 'white', mx: '6px', my: '2px'}} component={Link} noLinkStyle href="https://us06web.zoom.us/j/82538229861?pwd=S005WjRKU3NrQnR3RU1TK3dENFA1UT09">
            <LiveTvIcon></LiveTvIcon>&nbsp;32-155 (Zoom)
          </Button>
          <Button variant="outlined" size="large" sx={{color: 'white', borderColor: 'white', mx: '6px', my: '2px'}} component={Link} noLinkStyle href="https://us06web.zoom.us/j/81542117341?pwd=VDduYmNRem90czcvaGhXRHFxbWI0Zz09">
            <LiveTvIcon></LiveTvIcon>&nbsp;Sunday Virtual Presentation - Check-In Session (8:30pm)
          </Button>
          <Typography variant="string" paragraph="true" color="white" gutterBottom  sx={{marginTop: '12px'}}>
          <b>7:30AM-8:30AM</b> 		|		Breakfast & Registration<br/>
          <b>8:30AM-10:00AM	</b> 		|	Opening Plenary @ 32-123<br/>
          <b>10:30AM-12:30AM</b>  |		Oral Presentations #1 <br/>
          <b>12:30PM-1:30PM</b> 	|		Lunch <br/>
          <b>1:30PM-3:30PM</b> 		|		Oral Presentations #2 <br/>
          <b>4:00PM-5:00PM</b> 		|	Virtual Escape Room<br/>
          <b>5:00PM-6:00PM</b> 		|	Women in STEM Panel<br/>
          <b>6:00PM-7:00PM</b> 		|	Dinner<br/>
          <b>7:00PM-8:00PM</b> 		|	Speaker / Edward Adelson<br/>
          <b>8:00PM-8:30PM</b> 		|	Best Paper Award<br/>
          <b>8:30PM-10:00PM</b> 	|		Presentation Check <br/>
          </Typography>
          <Typography variant="string" component="h3" color="white" gutterBottom  sx={{marginBottom: '4px'}}>
            Oral Presentation Tracks and Rooms:
          </Typography>
          <Typography variant="string" paragraph="true" color="white" gutterBottom  sx={{marginTop: '12px'}}>
          <b>32-123</b> | 10:30 AM | Machine Learning / Artificial Intelligence (AI) #1  <br/>
          <b>32-141</b> | 10:30 AM | Computer Systems, Theoretical Computer Science |  Security & Communication  <br/>
          <b>32-155</b> | 10:30 AM | BioEECS and Applied Physics | Circuits, Materials, and Nanotechnologies  <br/> <br/>
          <b>32-123</b> | 1:30 PM | Robotics and Controls, Space Application and Tech  <br/>
          <b>32-141</b> | 1:30 PM | Machine Learning / Artificial Intelligence (AI) #2  <br/>
          <b>32-155</b> | 1:30 PM | Innovative Technologies | FIRST LEGO League Teams <br/>
          </Typography>
          <Typography variant="string" component="h1" color="white" gutterBottom>
            Sunday, October 2
          </Typography>
          <Typography variant="string" paragraph="true" color="white" gutterBottom>
          <b>7:30AM-8:30AM</b> 		|		Breakfast & Registration<br/>
          <b>8:30AM-10:00AM	</b> 		|	Poster Session #1<br/>
          <b>10:30AM-11:30AM</b> 		|		Sponsor Presentation<br/>
          <b>11:30AM-12:30PM</b> 	|			Lightning Talks<br/>
          <b>12:30PM-1:30PM	</b> 	|		Lunch<br/>
          <b>1:30PM-3:00PM</b> 		|		Poster Session #2<br/>
          <b>3:00PM-4:00PM</b> 	|			Closing Plenary<br/>
          {/* <Button variant="outlined" size="large" sx={{color: 'white', borderColor: 'white', mx: '6px'}} component={Link} noLinkStyle href="https://us06web.zoom.us/j/86345266326?pwd=R3A5TzEzcWZWMFFESHZoWFZ3ek1CUT09">
            <LiveTvIcon></LiveTvIcon>&nbsp;Welcome Reception (Zoom)
          </Button> */}
          </Typography>
          <Typography variant="string" component="h1" color="#a3a0a0" gutterBottom sx={{marginBottom: '0px'}}>
            Friday, September 30
          </Typography>
          <Button variant="outlined" size="large" sx={{color: '#a3a0a0', borderColor: '#a3a0a0', mx: '6px'}} component={Link} noLinkStyle href="https://us06web.zoom.us/j/86345266326?pwd=R3A5TzEzcWZWMFFESHZoWFZ3ek1CUT09">
            <LiveTvIcon></LiveTvIcon>&nbsp;Welcome Reception (Zoom)
          </Button>
          <Button variant="outlined" size="large" sx={{color: '#a3a0a0', borderColor: '#a3a0a0', mx: '6px'}} component={Link} noLinkStyle href="https://forms.gle/SXBjnCEvgYFWb9sT9">
            MIT Tours Sign-Up
          </Button>
          <Typography variant="string" paragraph="true" color="#a3a0a0" gutterBottom sx={{marginTop: '8px'}}>
          <b>02:00PM - 03:30PM</b>  | MIT Tour #1 @ Stata Center (TSMC Lobby) <br/>
          <b>03:30PM - 05:00PM</b> | MIT Tour #2 @ Stata Center (TSMC Lobby) <br/>
          <b>06:00PM - 06:30PM</b> | Registration @ Stata Center <br/>
          <b>06:30PM - 08:30PM</b> | Welcome Reception @ Stata Center <br/>
          <b>08:30PM - 10:00PM</b> | Presentation Check @ 32-123 <br/>
          </Typography>
          <Typography variant="string" component="h1" color="white" gutterBottom>
            Location:
          </Typography>
          <div class="mapouter" style={{position:'relative', textAlign: 'right', height: '400px', width:'100%'}}><div class="gmap_canvas" style={{overflow:'hidden', background:'none !important', height:'400px', width:'100%'}}><iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=stata%20center&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><br /><a href="https://www.embedgooglemap.net"></a></div></div>
        </GlassBox>
        <GlassBox>
          <Typography variant="text" component="h1" color="white" gutterBottom>
            Need Help? Questions?:
          </Typography>
          <Typography component="a" href="https://bit.ly/slackurtc" variant="h5" paragraph="true" color="white" gutterBottom>
            Reach us on Slack using the <i>#general</i> channel.
          </Typography>
          <Typography sx={{ marginTop: '8px'}}variant="h5" paragraph="true" color="white" gutterBottom>
            In Case of Emergency: MIT Police: 617-253-1212
          </Typography>
        </GlassBox>
        <br/><br/>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://www.googleapis.com/calendar/v3/calendars/4ser6ti605mgrfc83fuv0u43ls@group.calendar.google.com/events?key=${process.env.GOOGLE_API_KEY}`);
  const events = await res.json();
  return {
    props: {
      events
    },
    revalidate: 60, // In seconds
  }
}