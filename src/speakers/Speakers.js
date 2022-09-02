import { Typography, Box, Grid } from '@mui/material'
import { speakers } from './speaker_info'

import Speaker from './Speaker';


export default function Speakers() {
    const speakerComponents = speakers.map((speaker, i) => {
        return <Grid key={i} item xs={12} sm={6} lg={4}><Speaker {...speaker} /></Grid>
    })
    return (
        <Box>
            <Grid container spacing={3}>
                {speakerComponents}
            </Grid>
        </Box>
    );
} 