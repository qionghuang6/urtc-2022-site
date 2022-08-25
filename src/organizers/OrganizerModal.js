import { Typography, Box, Grid } from '@mui/material'

export default function Organizers(props) {
    return (
        <Box>
            <Typography>{JSON.stringify(props)}</Typography>
        </Box>
    );
} 