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

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? \n But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

export default function Index({events}) {
  const [calendarExpanded, setCalendarExpanded ] = React.useState(false);
  return (
    <>
      <Banner />
      <Container maxWidth="lg">
        <Grid container spacing="6px">
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
          </ Grid>
          <Grid item xs={12} md={6}>
            <GlassBox background='linear-gradient(135deg, rgba(33, 147, 200, 0.6), rgb(109, 213, 237, 0.6))' href='/resources'>
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
              URTC 2022 will take place in the Ray and Maria Stata Center (Building 32, 32 Vassar Street). More information about the venue will be posted nearer to the date of the conference.
              </Typography>
            </GlassBox>
          </Grid>
        </Grid>
        <Typography id="calendar" variant="h2" color="white" fontFamily="Montserrat" fontWeight="700" align="right">
          Schedule
        </Typography>
        <GlassBox background="linear-gradient(135deg, rgba(238, 156, 167, 0.2), rgb(255, 221, 225, 0.2))" sx={{ paddingTop: '8px', paddingBottom: '0px', paddingX: '0px'}}>
          <Box sx={{ overflow: 'scroll', height: !calendarExpanded ? '300px': 'fit-content'}}>
            <Calendar events={events} />
          </Box>
          <Button sx={{ color: 'white', backgroundColor: 'rgba(255,255,255, 0.2)', width: '100%'}}onClick={() => setCalendarExpanded(!calendarExpanded)}>{calendarExpanded ? 'Condense ': 'Show All'} </Button>
        </GlassBox>
        <Typography mt={3} variant="h2" color="white" fontFamily="Montserrat" fontWeight="700" align="right">
          Speakers &amp; Panelists
        </Typography>
        <GlassBox padding="6rem" marginBottom="2rem" background='linear-gradient(135deg, rgba(33, 147, 200, 0.6), rgb(109, 213, 237, 0.6))'>
          <Typography variant="h4" align="center" component="h1" color="white"> Click Here to see the Speakers! :D </Typography>
        </GlassBox>
        <Organizers/>
        <Box mt="20rem"/>
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