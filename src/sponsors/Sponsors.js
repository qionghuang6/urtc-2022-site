import { Box, Grid, Typography} from '@mui/material'
import GlassBox from '../GlassBox'
import { sponsors } from './sponsor_info'

export default function Sponsors({page}) {
    const imageStyle = {
        borderRadius: '16px',
        width: '100%',
    }
    const sponsorComps = sponsors.map((s, i) => {
        return <Grid key={i} item xs={12} sm={6} lg={4}><a href={s.href}><img style={imageStyle} alt={s.name} src={`sponsors/${s.img}`} /></a></Grid>
    })
    return (
        <Box>
            <Grid container spacing={3}>
                {sponsorComps}
                {!page && (<Grid item xs={12} sm={6} lg={4}>
                    <GlassBox href="/sponsorship" sx={{ margin: 0}}>
                        <Typography color="white" variant="h5" align="center" paddingBottom="12px">Interested in becoming a sponsor? Visit the Sponsorship page! </Typography>
                    </GlassBox>
                </Grid>)}
            </Grid>
        </Box>
    );
} 