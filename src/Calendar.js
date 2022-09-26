import { Typography } from "@mui/material";
import GlassBox from "./GlassBox";
import useMediaQuery from '@mui/material/useMediaQuery';

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

export default function Calendar({events}) {
    const mobile = useMediaQuery('(max-width:599px)');
    const sortedEvents = [...(events?.items)].sort((a,b) => new Date(a.start.dateTime).getTime() - new Date(b.start.dateTime).getTime());
    return (
        <>
            {sortedEvents?.filter(event => new Date(event.end.dateTime).getTime() > Date.now()).map(event => (
                <GlassBox key={event.id} sx={{ display: 'inline-block', margin: '8px', paddingX: '20px', paddingY: '12px', width: mobile ? '95%' : 'fit-content'}} background='linear-gradient(135deg, rgba(33, 147, 200, 0.6), rgb(109, 213, 237, 0.6))'>
                    <Typography align="left" variant="h6" fontFamily="Montserrat" fontWeight="700" color="white">{event.summary}</Typography>
                    <Typography align="left" variant="body1" color="white">{weekday[new Date(event.start.dateTime).getDay()]}, {new Date(event.start.dateTime).toLocaleDateString()}</Typography>
                    <Typography align="left" variant="body1" color="white">{new Date(event.start.dateTime).toLocaleTimeString()} - {new Date(event.end.dateTime).toLocaleTimeString()}</Typography>
                </GlassBox>
            ))}
        </>
      );
    }