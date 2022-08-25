import { Typography, Box, Grid } from '@mui/material'
import { organizers } from './organizer_info'

import OrganizerHeadshot from './OrganizerHeadshot';


export default function Organizers() {
    const headshots = organizers.map(organizer => {
        return <Grid item xs={6} sm={3} md={2}><OrganizerHeadshot key={organizer.name} {...organizer} /></Grid>
    })
    return (
        <Box>
            <Typography color="white" variant="h2" align="right" fontFamily="Montserrat" fontWeight="700" paddingBottom="12px">Organizers</Typography>
            <Box>
                <Grid container spacing={3}>
                    {headshots}
                </Grid>
            </Box>
        </Box>
    );
} 