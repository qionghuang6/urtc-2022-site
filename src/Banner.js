import {
    Container,
    Box,
    Typography,
} from '@mui/material';

export default function Banner() {
    return (
        <Box
            sm={10}
            sx={{
                backgroundColor:'purple',
                width: '100%',
                borderRadius: "2rem",
                py: "2rem",
                mt: "2rem",
            }}
        >
            <Typography variant="h2" align="center" color="#fff">
                MIT URTC 2022
            </Typography>
            <Typography variant="h4" align="center" color="#fff">
                MIT IEEE Undergraduate Research Technology Conference
            </Typography>
            <Typography variant="h4" align="center" color="#fff">
                September 30 - October 2, 2022
            </Typography>
        </Box>
    );
}
