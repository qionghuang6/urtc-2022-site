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

import trackStyle from './TrackStyle'

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

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
                    marginLeft: '0px'
                }}
                background="rgba(0,0,0,0)"
            >
                <Grid container>
                    <Grid item xs={12} sm={2}>
                        <div style={{
                            display: 'inline-block',
                            height: '100%',
                            verticalAlign: 'middle',    
                            display: mobile || mid ? 'inline' : 'none'
                        }}></div>
                        <Box align={mobile ? 'ce' : 'left'} mt="25px">
                            <>
                        <IconButton
                            href="https://www.facebook.com/MITURTC/"
                            sx={{ color: 'white', padding: '10px', paddingLeft: 0}}
                        >
                            <FacebookRoundedIcon sx={iconStyle}/>
                        </IconButton>
                            </>
                        </Box>
                        <Box align={mobile ? 'ce' : 'left'} mt="12px">
                            <>
                                <IconButton
                                    size="large"
                                    href="https://www.instagram.com/miturtc/"
                                    sx={{ color: 'white', paddingLeft: '0px'}}
                                >
                                    <InstagramIcon sx={iconStyle}/>
                                </IconButton>
                            </>
                        </Box>
                        <Box align={mobile ? 'ce' : 'left'} mt="12px">
                            <>
                                <IconButton
                                    size="large"
                                    href="https://www.instagram.com/miturtc/"
                                    sx={{ color: 'white', paddingLeft: '0px'}}
                                >
                                    <YouTubeIcon sx={iconStyle}/>
                                </IconButton>
                            </>
                        </Box>
                        <Box align={mobile ? 'ce' : 'left'} mt="12px">
                            <>
                                <IconButton
                                    size="large"
                                    href="https://www.linkedin.com/company/mit-urtc/"
                                    sx={{ color: 'white', paddingLeft: '0px'}}
                                >
                                    <LinkedInIcon sx={iconStyle}/>
                                </IconButton>
                            </>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={0.5}>
                    </Grid>
                    <Grid item xs={12} sm={7} >

                        <Typography variant="h3" align={mid? "center" : "left"} fontFamily="Montserrat" fontWeight="700" color="#fff" fontSize={mobile?'80px':'160px'} paddingBottom="5px">
                        <img style={{ verticalAlign: 'middle', horizontalAlign: 'left', display: mobile || mid ? 'inline' : 'none', width: "100%", maxWidth: mobile ? '120px':'235px', paddingBottom:'24px', paddingRight:'20px'}} src="/MIT-logo-red-gray.png" />
                        URTC
                        </Typography>
                        <Typography variant="h3" fontFamily='Montserrat' fontWeight="500" color="#fff">
                                <GradientTypography zIndex="1" fontFamily='Montserrat' fontWeight="700" paddingLeft="0px"
                                    background='-webkit-linear-gradient(0deg, #f12711, #f5af19)' chosen={gradientBanner === 0}
                                >
                                    Undergraduate
                                
                                </GradientTypography>
                                <GradientTypography zIndex="1" fontFamily="Montserrat" fontWeight="700" paddingLeft="250px"
                                    background='-webkit-linear-gradient(0deg, #00B4DB, #0083B0)' chosen={gradientBanner === 1}
                                >
                                    Research
                                
                                </GradientTypography>
                                <GradientTypography  fontFamily="Montserrat" fontWeight="700" paddingLeft="408px"
                                background='-webkit-linear-gradient(0deg, #c471f2, #f76cc6)' chosen={gradientBanner === 2}
                                >
                                    Technology
                                </GradientTypography>
                                <GradientTypography fontFamily="Montserrat" fontWeight="700" paddingLeft="600px"
                                    background='-webkit-linear-gradient(0deg, #36e364, #37f0e3)' chosen={gradientBanner === 3}
                                >
                                    Conference
                                </GradientTypography>
                        </Typography>
                        <Typography variant={mobile ? "h5" : "h4"} align={mobile ? 'ce' : 'center'} fontWeight="600" color="#fff" paddingBottom="30px" fontSize="22px" paddingTop='70px'>
                            <em>Cambridge, Massachusetts</em>
                        </Typography>
                        <Typography variant={mobile ? "h5" : "h4"} align={mobile ? 'ce' : 'center'} fontWeight="600" color="#fff" fontSize="22px">
                            <em>October 11 - October 13, 2024</em>
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={2.5}>
                    </Grid>

                    <Grid xs={12} sm={0.6}>
                    </Grid>

                    <Grid xs={12} sm={2.2} container direction="column" rowSpacing="15px" paddingTop="30px">
                        <Grid item>
                            {/* <Button href="" variant="outlined" sx={{fontSize:  mobile? '16px':'24px', marginX: '8px', color: '#f393f1', borderColor: 'transparent'}}> */}
                                <Typography fontWeight="1000" fontSize='25px' sx={{color: '#f393f1'}} align="left">
                                    <RocketLaunchIcon sx={trackStyle}/>
                                    ENGINEERING
                                </Typography>
                            {/* </Button>  */}
                        </Grid>
                        <Grid item>
                            {/* <Button href="" variant="outlined" sx={{fontSize:  mobile? '16px':'24px', marginX: '8px', color: '#ee3375', borderColor: 'transparent'}}> */}
                                <Typography fontWeight="1000" fontSize='25px' sx={{color: '#ee3375'}} align="left">
                                    <RocketLaunchIcon sx={trackStyle}/>
                                    LOGIC
                                </Typography>
                            {/* </Button>  */}
                        </Grid>
                        <Grid item>
                            {/* <Button href="" variant="outlined" sx={{fontSize:  mobile? '16px':'24px', marginX: '8px', color: '#ff4a31', borderColor: 'transparent'}}> */}
                                <Typography fontWeight="1000" fontSize='25px' sx={{color: '#ff4a31'}} align="left">
                                    <RocketLaunchIcon sx={trackStyle}/>
                                    COMPUTATION
                                </Typography>
                            {/* </Button>  */}
                        </Grid>
                        <Grid item>
                            {/* <Button href="" variant="outlined" sx={{fontSize:  mobile? '16px':'24px', marginX: '8px', color: '#ffe886', borderColor: 'transparent'}}> */}
                                <Typography fontWeight="1000" fontSize='25px' sx={{color: '#ffe886'}} align="left">
                                    <RocketLaunchIcon sx={trackStyle}/>
                                    EXPLORATION
                                </Typography>
                            {/* </Button>  */}
                        </Grid>
                    </Grid>

                    <Grid xs={12} sm={2.2} container direction="column" rowSpacing="15px" paddingTop="30px">
                        <Grid item>
                            {/* <Button href="" variant="outlined" sx={{fontSize:  mobile? '16px':'24px', marginX: '8px', color: '#2ece81', borderColor: 'transparent'}}> */}
                                <Typography fontWeight="1000" fontSize='25px' sx={{color:'#2ece81'}} align="left">
                                    <RocketLaunchIcon sx={trackStyle}/>
                                    HUMANITY
                                </Typography>
                            {/* </Button>  */}
                        </Grid>
                        <Grid item>
                            {/* <Button href="" variant="outlined" sx={{fontSize:  mobile? '16px':'24px', marginX: '8px', color: '#009dd0', borderColor: 'transparent'}}> */}    
                                <Typography fontWeight="1000" fontSize='25px' sx={{color: '#009dd0'}} align='left'>
                                    <RocketLaunchIcon sx={trackStyle}/>
                                    AUTOMATION
                                </Typography>
                            {/* </Button>  */}
                        </Grid>
                        <Grid item>
                            {/* <Button href="" variant="outlined" sx={{fontSize:  mobile? '16px':'24px', marginX: '8px', color: '#8669ff', borderColor: 'transparent'}}> */}
                                <Typography fontWeight="1000" fontSize='25px' sx={{color: '#8669ff'}} align="left">
                                    <RocketLaunchIcon sx={trackStyle}/>
                                    NETWORKS
                                </Typography>
                            {/* </Button>  */}
                        </Grid>
                        <Grid item>
                            {/* <Button href="" variant="outlined" sx={{fontSize:  mobile? '16px':'24px', marginX: '8px', color: '#bb7aff', borderColor: 'transparent'}}> */}
                                <Typography fontWeight="1000" fontSize='25px' sx={{color: '#bb7aff'}} align="left">
                                    <RocketLaunchIcon sx={trackStyle}/>
                                    SUSTAINABILITY
                                </Typography>
                            {/* </Button>  */}
                        </Grid>
                    </Grid>

                    <Grid xs={12} sm={1}>
                    </Grid>

                    
                    <Grid item xs={12} sm={6} >
                        <Box align={mobile ? 'ce' : 'right'}>
                            <Typography  color="#fff" paddingBottom="30px" fontSize="18px" paddingTop="35px">
                                <b>MIT URTC</b> is an internationally-renowned research conference for undergraduates and
                                by undergraduates. Our annual conference is themed around incredible breakthroughs in engineering
                                and technological research made by student researchers at the undergraduate level all over the
                                country.
                            </Typography>
                        </Box>    
                    </Grid>


                    {/* <Grid item xs={12} sm={0.04} >
                        <Box align={mobile ? 'ce' : 'left'} mt="25px" paddingLeft="30px">
                                <>
                                    <IconButton
                                        size="xs"
                                        sx={{ color: '#f393f1', paddingLeft: '0px'}}
                                        style={{maxWidth: '10px'}}
                                    >
                                        <RocketLaunchIcon sx={trackStyle}/>
                                        <Typography fontWeight="1000" fontSize='25px' style={{maxWidth: '10px'}} paddingLeft="10px">
                                            ENGINEERING
                                        </Typography>
                                    </IconButton>
                                </>
                            </Box>
                            <Box align={mobile ? 'ce' : 'left'} mt="0px" paddingLeft="30px">
                                <>
                                    <IconButton
                                        size="xs"
                                        sx={{ color: '#ee3375', paddingLeft: '0px'}}
                                        style={{maxWidth: '10px'}}
                                    >
                                        <RocketLaunchIcon sx={trackStyle}/>
                                        <Typography fontWeight="1000" fontSize='25px' style={{maxWidth: '10px'}} paddingLeft="10px">
                                            LOGIC
                                        </Typography>
                                    </IconButton>
                                </>
                            </Box>
                            <Box align={mobile ? 'ce' : 'left'} mt="0px" paddingLeft="30px">
                                <>
                                    <IconButton
                                        size="xs"
                                        sx={{ color: '#ff4a31', paddingLeft: '0px'}}
                                        style={{maxWidth: '10px'}}
                                    >
                                        <RocketLaunchIcon sx={trackStyle}/>
                                        <Typography fontWeight="1000" fontSize='25px' style={{maxWidth: '10px'}} paddingLeft="10px">
                                            COMPUTATION
                                        </Typography>
                                    </IconButton>
                                </>
                            </Box>
                            <Box align={mobile ? 'ce' : 'left'} mt="0px" paddingLeft="30px">
                                <>
                                    <IconButton
                                        size="xs"
                                        sx={{ color: '#ffe886', paddingLeft: '0px'}}
                                        style={{maxWidth: '10px'}}
                                    >
                                        <RocketLaunchIcon sx={trackStyle}/>
                                        <Typography fontWeight="1000" fontSize='25px' style={{maxWidth: '10px'}} paddingLeft="10px">
                                            EXPLORATION
                                        </Typography>
                                    </IconButton>
                                </>
                            </Box>
                    </Grid>
                    <Grid item xs={12} sm={5.8} paddingLeft="30px">
                        <Box align={mobile ? 'ce' : 'left'} mt="25px">
                        <>
                            <IconButton
                                size="xs"
                                sx={{ color: '#2ece81', paddingLeft: '280px'}}
                                style={{maxWidth: '10px'}}
                            >
                                <RocketLaunchIcon sx={trackStyle}/>
                                <Typography fontWeight="1000" fontSize='25px' style={{maxWidth: '10px'}} paddingLeft="10px">
                                    HUMANITY
                                </Typography>
                            </IconButton>
                            </>
                        </Box>
                        <Box align={mobile ? 'ce' : 'left'} mt="0px">
                        <>
                            <IconButton
                                size="xs"
                                sx={{ color: '#009dd0', paddingLeft: '280px'}}
                                style={{maxWidth: '10px'}}
                            >
                                <RocketLaunchIcon sx={trackStyle}/>
                                <Typography fontWeight="1000" fontSize='25px' style={{maxWidth: '10px'}} paddingLeft="10px">
                                    AUTOMATION
                                </Typography>
                            </IconButton>
                        </>
                        </Box>
                        <Box align={mobile ? 'ce' : 'left'} mt="0px">
                        <>
                            <IconButton
                                size="xs"
                                sx={{ color: '#8669ff', paddingLeft: '280px'}}
                                style={{maxWidth: '10px'}}
                            >
                                <RocketLaunchIcon sx={trackStyle}/>
                                <Typography fontWeight="1000" fontSize='25px' style={{maxWidth: '10px'}} paddingLeft="10px">
                                    NETWORKS
                                </Typography>
                            </IconButton>
                        </>
                        </Box>
                        <Box align={mobile ? 'ce' : 'left'} mt="0px">
                        <>
                            <IconButton
                                size="xs"
                                sx={{ color: '#bb7aff', paddingLeft: '280px'}}
                                style={{maxWidth: '10px'}}
                            >
                                <RocketLaunchIcon sx={trackStyle}/>
                                <Typography fontWeight="1000" fontSize='25px' style={{maxWidth: '10px'}} paddingLeft="10px">
                                    SUSTAINABILITY
                                </Typography>
                            </IconButton>
                        </>
                        </Box>
                    </Grid> */}






                    {/* <Grid>
                        <Typography  variant="h3" align={mid? "center" : "left"} fontFamily="Montserrat" fontWeight="500" color="#fff">
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
                        </Typography>
                    </Grid> */}
                        {/* <Box marginBottom={mobile ? "12px" : "36px"}>
                            <GradientTypography zIndex="1" fontFamily="Montserrat" fontWeight="700"
                                background='-webkit-linear-gradient(0deg, #f12711, #f5af19), -webkit-linear-gradient(0deg, #00B4DB, #0083B0)' chosen={gradientBanner === 0}
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
                        </Box> */}
                        {/* <Typography variant={mobile ? "h5" : "h4"} align={mobile ? 'ce' : 'center'} color="#fff">
                            Cambridge, Massachusetts
                        </Typography>
                        <Typography variant={mobile ? "h5" : "h4"} align={mobile ? 'ce' : 'center'} color="#fff">
                            October 6 - October 8, 2023
                        </Typography> */}
                    {/* </Grid> */}
                </Grid>
                    {/* <Button variant="outlined" component="a" target="_blank" href="https://cmt3.research.microsoft.com/URTC2023" sx={{fontSize: mobile? '16px':'24px', marginX: '8px', color: 'white', borderColor: 'white'}}>
                            Submit Your Research
                    </Button>
                    <Button href="#calendar" variant="outlined" sx={{fontSize:  mobile? '16px':'24px', marginX: '8px', color: 'white', borderColor: 'white'}}>
                            Schedule
                    </Button> */}
                {/* </Box> */}
            </GlassBox>
        </Container>
    );
}
