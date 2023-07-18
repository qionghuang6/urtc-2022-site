import { Typography, Box } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';


export default function GradientTypography({ background = '-webkit-linear-gradient(0deg, #36e364, #37f0e3)', chosen, sx = {}, children, ...other }) {
    const mobile = useMediaQuery('(max-width:599px)');
    const smaller = useMediaQuery('(max-width:740px)');
    const textStyles = {
        background,
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        transition: 'opacity 0.5s linear',
        position: 'absolute',
        // right: mobile ? undefined : 0,
        // left: mobile ? 0: undefined,
        // fontSize: mobile ? '35px' : smaller ? '55px' : '100px',
        fontSize: '28px',
        backgroundSize: "100%",
        backgroundRepeat: "repeat",
        backgroundClip: "text",
    }
    return (
        <Box sx={{...sx}} position="relative">
            <Typography {...other} sx={{...textStyles, background: 'white', zIndex: 0}}>
                { children }
            </Typography>
            <Typography {...other}  sx={{...textStyles, opacity: chosen ? 1 : 0, zIndex: 1}}>
                { children }
            </Typography>
        </Box>
        // <Box sx={{...sx, height: mobile ? '35px' : smaller ? '55px' : '100px'}} position="relative">
        //     <Typography {...other} sx={{...textStyles, background: 'white', zIndex: 0}}>
        //         { children }
        //     </Typography>
        //     <Typography {...other}  sx={{...textStyles, opacity: chosen ? 1 : 0, zIndex: 1}}>
        //         { children }
        //     </Typography>
        // </Box>
    );
}