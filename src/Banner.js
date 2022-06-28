import {
    Container,
    Box,
    Typography,
} from '@mui/material';

export default function Banner() {
    return (
        <Box
            sm={12}
            sx={{
                backgroundColor:'#000',
                width: '100%',
            }}
        >
            <Typography variant="h1" align="center" color="#fff">
                MIT URTC 2022
            </Typography>
            <Typography variant="h3" align="center" color="#fff">
                MIT IEEE Undergraduate Research Technology Conference
            </Typography>
            <Typography variant="h3" align="center" color="#fff">
                September 30 - October 2, 2022
            </Typography>
        </Box>
    );
}
