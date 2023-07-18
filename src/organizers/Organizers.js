import { Typography, Box, Grid } from '@mui/material'
import { organizers } from './organizer_info'

import OrganizerHeadshot from './OrganizerHeadshot';


export default function Organizers() {
    const headshots = organizers.map((organizer, i) => {
        return <Grid key={i} item xs={6} sm={3} lg={2}><OrganizerHeadshot key={organizer.name} {...organizer} /></Grid>
    })
    return (
        <Box sx={{ marginTop: '0px'}}>
            <Typography color="white" variant="h2" align="left" fontFamily="Montserrat" fontWeight="700" paddingBottom="20px">URTC 2023 Team</Typography>
            <Box>
                <Grid container spacing={3}>
                    {headshots}
                </Grid>
            </Box>
        </Box>
    );
} 