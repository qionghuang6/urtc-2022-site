import { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
    Typography,
    Grid,
    Container,
    Box,
    Button,
    IconButton,
} from '@mui/material';
import GlassBox from './GlassBox';
import GradientTypography from './GradientTypography';

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Banner() {
    const mobile = useMediaQuery('(max-width:599px)');
    const mid = useMediaQuery('(min-width:1300px)');

    const [gradientBanner, setGradientBanner] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setGradientBanner((gradientBanner + 1) % 4);
        }, 2000);
        return () => clearInterval(interval);
    }, [gradientBanner])

    const iconStyle = {
        width: '48px',
        height: '48px',
        '&:hover': {
            color: 'rgb(180,180,180)',
        },
        transition: 'color 0.25s linear',
    }

    return (
        <Container maxWidth="xl">
            <GlassBox
                sx={{
                    marginTop: '-24px',
                    backdropFilter: "blur(1px)",
                    marginBottom: '0.5rem',
                }}
                background="rgba(0,0,0,0)"
            >
                <Grid container>
                    <Grid item xs={12} sm={5}>
                        <div style={{
                            display: 'inline-block',
                            height: '100%',
                            verticalAlign: 'middle',    
                            display: mobile || mid ? 'inline' : 'none'
                        }}></div>
                        <img style={{ verticalAlign: 'middle', display: mobile || mid ? 'inline' : 'none', width: "100%", maxWidth: '550px'}} src="/logo.png" />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Typography variant="h3" align={mobile? "center" : "right"} fontFamily="Montserrat" fontWeight="500" color="#fff">
                            MIT IEEE
                        </Typography>
                        <Box marginBottom={mobile ? "12px" : "36px"}>
                            <GradientTypography zIndex="1" fontFamily="Montserrat" fontWeight="700"
                                background='-webkit-linear-gradient(0deg, #f12711, #f5af19)' chosen={gradientBanner === 0}
                            >
                                Undergraduate
                            </GradientTypography>
                            <GradientTypography fontFamily="Montserrat" fontWeight="700"
                                background='-webkit-linear-gradient(0deg, #00B4DB, #0083B0)' chosen={gradientBanner === 1}
                            >
                                Research
                            </GradientTypography>
                            <GradientTypography  fontFamily="Montserrat" fontWeight="700"
                                background='-webkit-linear-gradient(0deg, #c471f2, #f76cc6)' chosen={gradientBanner === 2}
                            >
                                Technology
                            </GradientTypography>
                            <GradientTypography fontFamily="Montserrat" fontWeight="700"
                                background='-webkit-linear-gradient(0deg, #36e364, #37f0e3)' chosen={gradientBanner === 3}
                            >
                                Conference
                            </GradientTypography>
                        </Box>
                        <Typography variant={mobile ? "h5" : "h4"} align={mobile ? 'left' : 'right'} color="#fff">
                            October 6 - October 8, 2023
                        </Typography>
                    </Grid>
                </Grid>
                <Box textAlign={mobile ? 'center' : 'right'} mt="16px">
                    <>
                        <IconButton
                            href="https://www.facebook.com/MITURTC/"
                            sx={{ color: 'white', padding: '8px', paddingLeft: 0}}
                        >
                            <FacebookRoundedIcon sx={iconStyle}/>
                        </IconButton>
                        <IconButton
                            size="large"
                            href="https://www.instagram.com/miturtc/"
                            sx={{ color: 'white', padding: '8px'}}
                        >
                            <InstagramIcon sx={iconStyle}/>
                        </IconButton>
                        <IconButton
                            size="large"
                            href="https://www.instagram.com/miturtc/"
                            sx={{ color: 'white', padding: '8px'}}
                        >
                            <YouTubeIcon sx={iconStyle}/>
                        </IconButton>
                        <IconButton
                            size="large"
                            href="https://www.linkedin.com/company/mit-urtc/"
                            sx={{ color: 'white', padding: '8px'}}
                        >
                            <LinkedInIcon sx={iconStyle}/>
                        </IconButton>
                    </>
                    <Button variant="outlined" component="a" target="_blank" href="https://cmt3.research.microsoft.com/URTC2023" sx={{fontSize: mobile? '16px':'24px', marginX: '8px', color: 'white', borderColor: 'white'}}>
                            Submit Your Research
                    </Button>
                    <Button href="#calendar" variant="outlined" sx={{fontSize:  mobile? '16px':'24px', marginX: '8px', color: 'white', borderColor: 'white'}}>
                            Schedule
                    </Button>
                </Box>
            </GlassBox>
        </Container>
    );
}
