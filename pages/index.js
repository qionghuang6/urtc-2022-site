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
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Index({ events }) {
  const [calendarExpanded, setCalendarExpanded] = React.useState(false);
  const mobile = useMediaQuery('(max-width:599px)');

  return (
    <>
      <Banner />
      <Container maxWidth="xl">
      {/* <GlassBox background='-webkit-linear-gradient(0deg, rgb(0,180,219, 0.8), rgb(0,131,176, 0.8))'> */}
        <Grid container direction="row" columnSpacing="8px" sx={{background:'white', paddingTop:'20px', paddingBottom:'15px'}}>
          <Grid item xs={7.7} container direction="column" rowSpacing="2px" align="center">
              <Grid item>
                <Typography variant="text" component="h1" color="black"> 
                  MIT URTC @ Ray and Maria Stata Center
                </Typography>
              </Grid>
              <Grid item>
                <Typography color="black" variant="h5" paddingTop="5px">
                (32 Vassar St, Cambridge, MA 02139) 
                </Typography>
              </Grid> 
              <Grid item>
                <Typography color="black" variant="h5" paddingTop="10px"> {/* paddingTop 25px */}
                Technical Paper Submission Deadline: <b>August 9, 2024</b> 
                </Typography>
              </Grid>
              <Grid item>
                <Typography color="black" variant="h5" paddingTop="0px" > {/* paddingTop 10px */}
                Technical Paper Acceptance Notification: <b>September 1, 2024</b> 
                </Typography>
              </Grid>
              <Grid item>
                <Typography color="black" variant="h5" paddingTop="0px"> {/* paddingTop 10px */}
                Poster and Lighting Talk Submissions Deadline: <b>September 6, 2024</b> 
                </Typography>
              </Grid>
              <Grid item>
                <Typography color="black" variant="h5" paddingTop="0px"> {/* paddingTop 10px */}
                Poster and Lightning Talk Acceptance Notification: <b>September 13, 2024</b> 
                </Typography> 
              </Grid> 
              <Grid item>
                <Typography paddingTop='15px'>
                  <Button variant='contained' component="a" target="_blank" href="https://cmt3.research.microsoft.com/URTC2024"  sx={{fontSize: mobile? '16px':'24px', marginX: '8px', color: 'white', backgroundColor: 'black', borderColor: 'black'}}>
                          Submit Your Research
                  </Button>

                  {/* <Button variant='contained' component="a" target="_blank" href="https://cvent.me/OdW7yz"  sx={{fontSize: mobile? '16px':'24px', marginX: '8px', color: 'white', backgroundColor: 'black', borderColor: 'black'}}>
                          Register
                  </Button> */}
                </Typography> 
              </Grid>
            </Grid>
            <Grid item xs={4.3} align="left">
              <Typography variant="h3" fontFamily="Montserrat" color="#fff" >
                <img style={{width: "100%", maxWidth:"450px", verticalAlign:"center"}} src="/stata_transparent.png" />
              </Typography>
            </Grid>


        {/* <Grid item xs={8} >
            <GlassBox background='-webkit-linear-gradient(0deg, rgb(0,180,219, 0.8), rgb(0,131,176, 0.8))'>
             <Grid item xs={12}>
              <Typography align="center" variant="text" component="h1" color="white">
                  MIT URTC @ Ray and Maria Stata Center
                </Typography>
                <Typography color="white" variant="h5" align="center" paddingBottom='20px'>
                (32 Vassar St, Cambridge, MA 02139) 
                </Typography>
                <Typography color="white" variant="h5" align="center">
                Technical Paper Submission Deadline: <b>August 4, 2023</b> 
                </Typography>
                <Typography color="white" variant="h5" align="center">
                Technical Paper Acceptance Notification: <b>August 27, 2023</b> 
                </Typography>
                <Typography color="white" variant="h5" align="center">
                Poster and Lighting Talk Submissions Deadline: <b>September 3, 2023</b> 
                </Typography>
                <Typography color="white" variant="h5" align="center">
                Poster and Lightning Talk Acceptance Notification: <b>September 10, 2023</b> 
                </Typography>  
                <Typography align='center' paddingTop='20px'>
                  <Button variant='contained' component="a" target="_blank" href="https://cmt3.research.microsoft.com/URTC2023"  sx={{fontSize: mobile? '16px':'24px', marginX: '8px', color: 'white', backgroundColor: 'black', borderColor: 'black'}}>
                          Submit Your Research
                  </Button>
                </Typography> 
              </Grid>
            </GlassBox>
          </Grid>
          <Grid item xs={4} paddingTop='25px'>
            <GlassBox background='transparent'>
              <Typography align='center' variant="h3" fontFamily="Montserrat" color="#fff" >
                <img style={{ align: 'center', verticalAlign: 'middle', width: "100%", maxWidth: '450px'}} src="/stata.png" />
              </Typography>
            </GlassBox>
          </Grid> */}

          {/* <Grid item xs={12} >
            <GlassBox background='-webkit-linear-gradient(0deg, rgb(0,180,219, 0.8), rgb(0,131,176, 0.8))'>
              <Typography align="center" variant="text" component="h1" color="white">
                URTC 2023 Dates
              </Typography>
              <Typography color="white" variant="h5" align="center">
              Technical Paper Submission Deadline: <b>August 4, 2023</b> 
              </Typography>
              <Typography color="white" variant="h5" align="center">
              Technical Paper Acceptance Notification: <b>August 27, 2023</b> 
              </Typography>
              <Typography color="white" variant="h5" align="center">
              Poster and Lighting Talk Submissions Deadline: <b>September 3, 2023</b> 
              </Typography>
              <Typography color="white" variant="h5" align="center">
              Poster and Lightning Talk Acceptance Notification: <b>September 10, 2023</b> 
              </Typography>
            </GlassBox>
          </Grid> */}
    
          {/* <Grid item xs={12} md={6} >
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
          </Grid> */}
          
        </ Grid>
        {/* </GlassBox> */}
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing="6px">
          <Box paddingTop="40px"></Box>
          <Grid item xs={12} >

            {/* <GlassBox background="rgba(0, 255, 242, 0.5)" href="https://events.vtools.ieee.org/m/322774">
              <Typography align="center" variant="h4" component="h1" color="white">
                Registration is Now Open!
              </Typography>
              <Typography align="center" variant="h5" color="white">Click Here to Register!</Typography>
            </GlassBox> */}

          </Grid>
          {/* <Grid item xs={12} md={6}>
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
          </ Grid> */}
          {/* <Grid item xs={12} md={6}> */}
            {/* <GlassBox background='linear-gradient(45deg, rgba(255,0,0,0.6), rgb(255, 255, 0, 0.6))'>
              <Typography variant="h4" align="center" fontFamily="Montserrat" fontWeight="700" component="h1" color="white" gutterBottom>
                Location
              </Typography>
              <Typography variant="body1" component="h1" color="white" gutterBottom>
                URTC 2023 will take place at the Ray and Maria Stata Center, home of MIT's Computer Science and Artificial Intelligence Laboratory (CSAIL). The Stata Center is located at 32 Vassar Street, Cambridge, MA 02139.
              </Typography>
            </GlassBox>
            <GlassBox background='linear-gradient(45deg, rgba(232,123,213,0.6), rgb(222, 55, 123, 0.6))' href="/submission">
              <Typography variant="h4" align="center" fontFamily="Montserrat" fontWeight="700" component="h1" color="white" gutterBottom href="/submission">
                Find Submission and Presentation Guidelines Here!
              </Typography>
            </GlassBox>
          </Grid> */}
        </Grid>
        
        <Typography id="calendar" variant="h2" color="white" fontFamily="Montserrat" fontWeight="700" align="left">
          URTC 2024
        </Typography>
        <Typography variant='h5' marginBottom='25px'>
          <hr align='left' style={{width: mobile? '400px':'800px', height:'6px', backgroundColor: 'white'}}></hr>
        </Typography>
        <Grid container direction="row" columnSpacing={4}>
          <Grid item xs={4.5} align='left'>
             <img style={{width: "100%", maxWidth: mobile? "205px":"410px"}} src="/blackboard.png" />
          </Grid>
          <Grid item xs={5} container direction="column" rowSpacing={4.5} align='left' >
            <Grid item>
              <Button variant="outlined" sx={{fontSize: mobile? '12px':'18px', color: 'white', borderColor: 'transparent'}} href="https://drive.google.com/file/d/1dCzb9vKWOcATE77cVMUkuG574Mgd9HlQ/view?usp=drive_link"><PictureAsPdfIcon/>{'\u00A0'}Program Overview Table (2023)</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" sx={{fontSize: mobile? '12px':'18px', color: 'white', borderColor: 'transparent'}} href="https://drive.google.com/file/d/1zoajDwG-amGhkUjAp3lMRO7LIQKnMzIt/view?usp=drive_link"><PictureAsPdfIcon/>{'\u00A0'}Paper Presentation Schedule (2023) </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" sx={{fontSize: mobile? '12px':'18px', color: 'white', borderColor: 'transparent'}} href="https://drive.google.com/file/d/1RpYd-rULck2FcGRaE4YQzWQrBvJxLirQ/view?usp=drive_link"><PictureAsPdfIcon/>{'\u00A0'}Poster Presentation Schedule (2023)</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" sx={{fontSize: mobile? '12px':'18px', color: 'white', borderColor: 'transparent'}} href="https://drive.google.com/file/d/11ZssqZUXChaD4f1ebO3b_z6cmeoYhb14/view?usp=drive_link"><PictureAsPdfIcon/>{'\u00A0'}Lightning Talk Schedule (2023)</Button>
            </Grid>
          </Grid>
          <Grid item xs={2.5} align="right">
            <img style={{width: "100%", maxWidth: mobile? "200px":"400px"}} src="/rocket_art.png" />
          </Grid>
        </Grid>

        <Grid container direction="row" columnSpacing={6} sx={{marginTop: '20px'}}>
          <Grid item>
            <Button variant='contained' component="a" target="_blank" href="/team"  sx={{fontSize: mobile? '12px':'18px', marginX: '8px', color: 'black', backgroundColor: 'white'}}>
              Meet the Team
            </Button>
          </Grid>
          <Grid item>
            <Button variant='contained' component="a" target="_blank" href="https://bit.ly/urtc23-tracks"  sx={{fontSize: mobile? '12px':'18px', marginX: '8px', color: 'black', backgroundColor: 'white'}}>
              2024 Tracks
            </Button>
          </Grid>
          <Grid item>
            <Button variant='contained' component="a" target="_blank" href="/submission"  sx={{fontSize: mobile? '12px':'18px', marginX: '8px', color: 'black', backgroundColor: 'white'}}>
              How to Apply
            </Button>
          </Grid>
        </Grid>

        
        <Typography id="calendar" variant="h2" color="white" fontFamily="Montserrat" fontWeight="700" align="left" paddingTop='50px'>
          SPEAKERS (2023)
        </Typography>
        <Typography variant='h5' marginBottom='20px'>
          <hr align='left' style={{width: mobile? '400px':'800px', height:'6px', backgroundColor: 'white'}}></hr>
        </Typography>
        <Speakers />

        <Typography id="calendar" variant="h2" color="white" fontFamily="Montserrat" fontWeight="700" align="left" paddingTop='50px'>
          SPONSORS
        </Typography>
        <Typography variant='h5' marginBottom='20px'>
          <hr align='left' style={{width: mobile? '400px':'800px', height:'6px', backgroundColor: 'white'}}></hr>
        </Typography>
        <Sponsors/>


        {/* <Typography id="calendar" variant="h2" color="white" fontFamily="Montserrat" fontWeight="700" align="right">
          2023 Schedule (Coming Soon)

        </Typography>
        <Typography id="calendar" variant="h2" color="white" fontFamily="Montserrat" fontWeight="700" align="right">
          2022 Schedule
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
          2022 Speakers &amp; Panelists
        </Typography>
        <Speakers />
        <Organizers />
        <Typography mt={3} variant="h2" color="white" fontFamily="Montserrat" fontWeight="700" align="right">
          Sponsors
        </Typography>
        <Sponsors />
        <Box mt="10rem" /> */}
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
