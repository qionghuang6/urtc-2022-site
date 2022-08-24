import {
    Typography,
} from '@mui/material';
import GlassBox from './GlassBox';

export default function Banner() {
    return (
        <GlassBox
            sm={10}
            sx={{
                marginTop: '-24px'
            }}
            background="rgba(148,0,211,0.7)"
        >
            <Typography variant="h2" align="center" color="#fff" fontFamily="Montserrat">
                MIT URTC 2022
            </Typography>
            <Typography variant="h4" align="center" color="#fff">
                MIT IEEE Undergraduate Research Technology Conference
            </Typography>
            <Typography variant="h4" align="center" color="#fff">
                September 30 - October 2, 2022
            </Typography>
        </GlassBox>
    );
}
