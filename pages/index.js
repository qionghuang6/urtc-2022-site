import * as React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Button,
} from '@mui/material';
import Banner from '../src/Banner';
import GlassBox from '../src/GlassBox';
import Organizers from '../src/organizers/Organizers';
import Calendar from '../src/Calendar';
import Speakers from '../src/speakers/Speakers';
import Sponsors from '../src/sponsors/Sponsors';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

export default function Index({ events }) {
  const [calendarExpanded, setCalendarExpanded] = React.useState(false);
  return (
    <>
      <Banner />
      <Container maxWidth="xl">
        <Grid container spacing="0px">
          <Grid item xs={12} >
            <GlassBox background='linear-gradient(45deg, rgba(196, 113, 242,0.8), rgb(247, 108, 198, 0.8))' href="/conference">
              <Typography align="center" variant="text" component="h1" color="white">
                Day-of Conference Information
              </Typography>
              <Typography align="center" variant="h5" color="white">Click Here!</Typography>
            </GlassBox>
          </Grid>
          <Grid item xs={12} md={6} >
            <GlassBox background="rgba(222, 95, 218, 0.5)" href="https://now.mit.edu/policies/campus-access-and-visitors/">
              <Typography align="center" variant="h6" component="h1" color="white">
                Note: All attendees are required to be up to date with COVID-19 Vaccinations as per MIT Policies. (Required for Tim Tickets)
              </Typography>
              <Typography align="center" variant="body1" color="white">For more info on MIT's COVID-19 and visitor policies, visit now.mit.edu. </Typography>
            </GlassBox>
          </Grid>
          <Grid item xs={12} md={6} >
            <GlassBox background="rgba(222, 95, 218, 0.5)" href="https://visitors.mit.edu/?event=53baaf2e-c3b7-4f52-8577-3f235c2ef92f">
              <Typography align="center" variant="h4" component="h1" color="white">
                Sign Up for Tim Tickets Now!
              </Typography>
              <Typography align="center" variant="body1" color="white">Tim Tickets are required for all non-MIT affliated guests to enter the conference: https://visitors.mit.edu/?event=53baaf2e-c3b7-4f52-8577-3f235c2ef92f</Typography>
            </GlassBox>
          </Grid>
        </ Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing="6px">
          <Box paddingTop="24px"></Box>
          <Grid item xs={12} >
            <GlassBox background="rgba(0, 255, 242, 0.5)" href="https://events.vtools.ieee.org/m/322774">
              <Typography align="center" variant="h4" component="h1" color="white">
                Registration is Now Open!
              </Typography>
              <Typography align="center" variant="h5" color="white">Click Here to Register!</Typography>
            </GlassBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <GlassBox href="./about">
              <Typography variant="h4" align="center" fontFamily="Montserrat" fontWeight="700" component="h1" color="white" gutterBottom>
                What is URTC?
              </Typography>
              <Typography variant="body1" component="h1" color="white" gutterBottom>
                MIT URTC is an internationally-renowned research conference, for undergraduates and by undergraduates.

                Our annual conferences are themed around incredible breakthroughs in engineering and technological research made by student researchers at the undergraduate level all over the country. With our yearly events, participants are given the exciting opportunity to present, discuss, and develop solutions for advancing technology for humanity.

                Staffed by a group of students from MIT working in collaboration with the Institute of Electrical and Electronics and Engineers (IEEE), we boast a wide variety of programming at each conference such as paper/poster presentations by our student presenters, talks and panels by industry leaders, and networking and social events.
              </Typography>
            </GlassBox>
            <GlassBox background='linear-gradient(45deg, rgba(232,123,213,0.6), rgb(222, 55, 123, 0.6))' href="/submission">
              <Typography variant="h4" align="center" fontFamily="Montserrat" fontWeight="700" component="h1" color="white" gutterBottom href="/submission">
                Find Submission and Presentation Guidelines Here!
              </Typography>
            </GlassBox>
          </ Grid>
          <Grid item xs={12} md={6}>
            <GlassBox background='linear-gradient(135deg, rgba(33, 147, 200, 0.6), rgb(109, 213, 237, 0.6))'>
              <Typography variant="h4" align="center" component="h1" fontFamily="Montserrat" fontWeight="700" color="white" gutterBottom>
                Logistics
              </Typography>
              <Typography variant="body1" component="h1" color="white" gutterBottom>
                This year, URTC will be held under a hybrid model—we will combine virtual elements from our 2020 and 2021 conferences and in-person elements from all the years that came before that! This change aims to allow participants an authentic conference experience with like-minded peers in the same physical environment while also providing those who are unable to travel to MIT to experience the conference virtually. Both student presenters and general attendees are eligible to participate in either method.

                Note: we are not hosting two separate in-person and virtual conferences! Instead, we are providing a means for URTC participants to attend and present virtually through live streaming. To accommodate this combined method, many of our events will be run in a modified format.

                When registering for the conference, attendees can choose to attend either in-person or virtually.
              </Typography>
            </GlassBox>
            <GlassBox background='linear-gradient(45deg, rgba(255,0,0,0.6), rgb(255, 255, 0, 0.6))'>
              <Typography variant="h4" align="center" fontFamily="Montserrat" fontWeight="700" component="h1" color="white" gutterBottom>
                Location
              </Typography>
              <Typography variant="body1" component="h1" color="white" gutterBottom>
                URTC 2022 will take place in the Ray and Maria Stata Center (Building 32, 32 Vassar Street)
              </Typography>
            </GlassBox>
          </Grid>
        </Grid>
        <Typography id="calendar" variant="h2" color="white" fontFamily="Montserrat" fontWeight="700" align="right">
          Schedule
        </Typography>
        <Grid container direction="row" justifyContent="space-around" alignItems="end" spacing={1} sx={{marginBottom: '8px'}}>
          <Grid item>
            <Button variant="outlined" sx={{color: 'white', borderColor: 'white'}} href="/urtc_2022_program_table.pdf"><PictureAsPdfIcon/>{'\u00A0'}Program Overview Table</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" sx={{color: 'white', borderColor: 'white'}} href="/urtc_2022_paper_presentation_schedule.pdf"><PictureAsPdfIcon/>{'\u00A0'}Paper Presentation Schedule</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" sx={{color: 'white', borderColor: 'white'}} href="/urtc_2022_poster_presentation_schedule.pdf"><PictureAsPdfIcon/>{'\u00A0'}Poster Presentation Schedule</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" sx={{color: 'white', borderColor: 'white'}} href="/urtc_2022_lightning_talk_schedule.pdf"><PictureAsPdfIcon/>{'\u00A0'}Lightning Talk Schedule</Button>
          </Grid>
        </Grid>
        <GlassBox background="linear-gradient(135deg, rgba(238, 156, 167, 0.2), rgb(255, 221, 225, 0.2))" sx={{ paddingTop: '8px', paddingBottom: '0px', paddingX: '0px', marginX: 0 }}>
          <Box sx={{ overflow: 'scroll', height: !calendarExpanded ? '300px' : 'fit-content' }}>
            <Calendar events={events}/>
          </Box>
          <Button sx={{ color: 'white', backgroundColor: 'rgba(255,255,255, 0.2)', width: '100%' }} onClick={() => setCalendarExpanded(!calendarExpanded)}>{calendarExpanded ? 'Condense ' : 'Show All'} </Button>
        </GlassBox>
        <Typography mt={3} variant="h2" color="white" fontFamily="Montserrat" fontWeight="700" align="right">
          Speakers &amp; Panelists
        </Typography>
        <Speakers />
        <Organizers />
        <Typography mt={3} variant="h2" color="white" fontFamily="Montserrat" fontWeight="700" align="right">
          Sponsors
        </Typography>
        <Sponsors />
        <Box mt="10rem" />
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