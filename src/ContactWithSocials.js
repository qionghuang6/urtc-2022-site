import * as React from 'react';
import { Box, Typography, IconButton} from '@mui/material';

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Socials() {
  return (
    <Box position="fixed" left="1rem" bottom="4px" p="8px" borderRadius="8px" backgroundColor="rgba(0,0,0, 0.7)">
      <IconButton
        size="large"
        href="https://www.facebook.com/MITURTC/"
        sx={{ color: 'white', padding: '4px', paddingLeft: 0}}
      >
        <FacebookRoundedIcon />
      </IconButton>
      <IconButton
        size="large"
        href="https://www.instagram.com/miturtc/"
        sx={{ color: 'white', padding: '4px'}}
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        size="large"
        href="https://www.instagram.com/miturtc/"
        sx={{ color: 'white', padding: '4px'}}
      >
        <YouTubeIcon />
      </IconButton>
      <IconButton
        size="large"
        href="https://www.linkedin.com/company/mit-urtc/"
        sx={{ color: 'white', padding: '4px'}}
      >
        <LinkedInIcon />
      </IconButton>
      <br/>
      <a href="mailto:ieee-ucc-chairs@mit.edu">
        <Typography variant="body1  " color="rgb(255,160,255)" display="inline">
          ieee-ucc-chairs@mit.edu
        </Typography>
      </a>
    </Box>
  );
}
