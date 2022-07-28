import * as React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
} from '@mui/material';
import Banner from '../src/Banner';
import GlassBox from '../src/GlassBox';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? \n But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

export default function Index() {
  return (
    <>
      <Container maxWidth="lg">
        <Banner />
        <Box sx={{ my: 4 }}>
          <Typography sx={{
            fontFamily: 'Gloria Hallelujah',
          }}
            variant="h4" align="center" component="h1" color="white" gutterBottom
          >
            Hello world! Tammy Chen is a Tomato/Potato?
          </Typography>
        </Box>
        <Grid container spacing="48px">
          <Grid item xs={12} md={6}>
            <GlassBox>
              <Typography variant="h4" align="center" component="h1" color="white" gutterBottom>
                Test Heading
              </Typography>
              <Typography variant="body1" component="h1" color="white" gutterBottom>
                {lorem}
              </Typography>
            </GlassBox>
          </ Grid>
          <Grid item xs={12} md={6}>
            <GlassBox background='linear-gradient(135deg, rgba(33, 147, 200, 0.7), rgb(109, 213, 237, 0.7))'>
              <Typography variant="body1" component="h1" color="white" gutterBottom>
                {lorem.substring(200, 1600)}
              </Typography>
            </GlassBox>
            <GlassBox background='linear-gradient(45deg, rgba(255,0,0,0.8), rgb(255, 255, 0, 0.8))'>
              <Typography variant="h4" component="h1" color="white" gutterBottom>
                Potato
              </Typography>
            </GlassBox>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
