import {
    Box,
} from '@mui/material';

const defaultGrad = 'linear-gradient(135deg, rgba(238, 156, 167, 0.8), rgb(255, 221, 225, 0.8))';

export default function GlassBox({background = defaultGrad, sx, children}) {
    return (
        <Box
            sx={{
                background,
                borderRadius: "2rem",
                p: "1rem",
                ...sx,
            }}
        >   
            {children}
        </Box>
    );
}
