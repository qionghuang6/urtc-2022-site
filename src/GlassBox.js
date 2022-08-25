import {
    Box, Typography,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const defaultGrad = 'linear-gradient(135deg, rgba(238, 156, 167, 0.5), rgb(255, 221, 225, 0.5))';

export default function GlassBox({background = defaultGrad, href="", sx={}, children, ...other}) {
    return (
        <Box
            sx={{
                background,
                borderRadius: "2rem",
                p: "1.5rem",
                marginX: "18px",
                marginBottom: "2rem",
                backdropFilter: "blur(3px)",
                '&:hover': {
                    outline: href ? "2px solid #fff" : 'none',
                    cursor: href ? "pointer" : 'default',
                },
                transition: 'outline 0.25s linear',
                position: "relative",
                ...sx
            }}
            onClick={() => {
                if (href) {
                    window.location.href = href;
                }
            }}
            {...other}
        >   
            { href ? <OpenInNewIcon style={{position: 'absolute', right: '1.25rem', top: '1.25rem', color: 'white'}} /> : null }
            {children}
        </Box>
    );
}
