import * as React from 'react';
import Head from 'next/head';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import GlassBox from '../src/GlassBox';

export default function About() {
  const title = 'About | URTC 2024'
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
      </Head>
      <Container maxWidth="md">
        <GlassBox sx={{ my: 4, mx: 0 }} background="rgba(30,30,30,0.5)">
          <Typography variant="string" component="h1" color="white" gutterBottom>
            What is URTC?
          </Typography>
          <Typography variant="string" paragraph="true" color="white" gutterBottom>
            MIT URTC is an internationally-renowned research conference, for undergraduates and by undergraduates.
            Our annual conferences are themed around incredible breakthroughs in engineering and technological research made by student researchers at the undergraduate level all over the country. With our yearly events, participants are given the exciting opportunity to present, discuss, and develop solutions for advancing technology for humanity.
            Staffed by a group of students from MIT working in collaboration with the Institute of Electrical and Electronics and Engineers (IEEE), we boast a wide variety of programming at each conference such as paper/poster presentations by our student presenters, talks and panels by industry leaders, and networking and social events.
          </Typography>
          <img src="/conference_1.png" width="100%"></img>
          <Typography variant="string" component="h1" color="white" gutterBottom>
            Program At A Glance
          </Typography>
          <Typography variant="string" component="h2" color="white" gutterBottom>
            Tracks
          </Typography>
          <Typography variant="string" paragraph="true" color="white" gutterBottom>
            URTC is organized around our different “tracks,” which we identify as the most prevailing themes in modern technology research. Each element of the conference hits on one of these key themes; our overarching goal each year is to have everyone participating come out of the conference with better awareness, appreciation, and ambition for the problems posed and the solutions given in each component of the technological world.
          </Typography>
          <img src="/tracks2023.png" width="100%"></img>
          <Typography variant="string" component="h2" color="white" gutterBottom>
            Conference Agenda
          </Typography>
          <Typography variant="overline" component="h3" color="white" gutterBottom>
            Opening Ceremony
          </Typography>
          <Typography variant="string" paragraph="true" color="white" gutterBottom>
            URTC begins formally with an opening ceremony led by our conference chairs—Tammy Chen, George Liu, and Ellie Montemayor, as well as our IEEE advisor Gim Soon Wan—to welcome participants and affirm the need and utility of the conference’s organization, as well as to provide a further introduction into the state of the technological world to motivate interest in and prelude into the main elements of the conference.
          </Typography>
          <Typography variant="overline" component="h3" color="white" gutterBottom>
            Papers, Posters and Lightning Talks
          </Typography>
          <Typography display="block" variant="string" paragraph="true" color="white" gutterBottom>
            The highlight of our program are our student presentations, split up in three different categories—the papers, posters, and lightning talks! Each undergraduate team presenting at URTC chooses one of the three categories to design their presentations on; each presentation is meant to highlight and discuss key points of their research to educate and enlighten their audience in an engaging manner. All participants of URTC are welcome to attend any presentations throughout the duration of the conference.

            Paper presentation sessions are a way for our student participants to discuss their research orally in a keynote format. These sessions are organized according to each URTC track, with all student presenters within a track presenting sequentially for 10 minutes each at some specified timeblock during the conference. After the conference, presenters’ research papers (in IEEE-style conference proceedings) are published collectively in the IEEE Xplore database.

            Poster presentations are designed for a more condensed snapshot of the results of research. While poster presenters are also given the opportunity to discuss their work in some specified block of time during the conference, these discussions are more informal and typically conversational in the perspective of speaker-audience interactions. Posters will remain in exhibition throughout the duration of the conference, even outside of the allotted presenting time.
            Lightning talks are organized like the paper presentations but are meant to, as suggested by their naming, provide quick, condensed presentations of the most fundamental aspects of students’ research. While lightning talks are also presented in a keynote format, presenters are limited to 5 minutes of presentation time each.
          </Typography>
          <Typography variant="overline" component="h3" color="white" gutterBottom>
            Guest Speakers and Panelists
          </Typography>
          <Typography variant="string" paragraph="true" color="white" gutterBottom>
            In addition to student presentations, each year we invite renowned tech experts and leaders from various industries in technology to speak at URTC. These speakers, armed with their years of knowledge in the workplace, provide exciting perspectives on next-generation technologies, applications in everything ranging from environmental conservation to medical care, and even advice for undergrad and grad school. Past speakers and panelists have included professors and veteran researchers from MIT, engineers from Big Tech companies like Microsoft, and current graduate students associated with MIT.
          </Typography>
          <Typography variant="overline" component="h3" color="white" gutterBottom>
            Networking and Social Events
          </Typography>
          <Typography variant="string" paragraph="true" color="white" gutterBottom>
            In addition to all of these speaker-attendee elements involved in the conference, we also feature several more interactive events for attendees to enjoy. On each day of the conference, we have several unstructured “student lounge” breaks for attendees to use to recompose themselves following a series of panels or a student presentation session as well as a lunch break with catered services. Some of our more structured social events include networking sessions, where attendees are given the opportunity to interact with one another, with our student presenters, and often with some of our attending panelists/tech experts for developing professional contacts; group recreational activities such as playing cooperative and strategy-oriented party games or watching technology-themed films; and presentation feedback sessions.
          </Typography>
          <Typography variant="overline" component="h3" color="white" gutterBottom>
            Closing Ceremony and Best Paper Awards
          </Typography>
          <Typography variant="string" paragraph="true" color="white" gutterBottom>
            And, when everyone has had their fill of all our exciting events, URTC ends with an announcement of the year’s best paper awards and a closing ceremony that reflects on the content shared during the conference and reaffirms the need for continual critical evaluation of technology through gatherings and forums like URTC in the endless pursuit of knowledge.
          </Typography>
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
