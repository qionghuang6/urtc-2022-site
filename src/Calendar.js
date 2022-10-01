import { Typography } from "@mui/material";
import GlassBox from "./GlassBox";
import useMediaQuery from '@mui/material/useMediaQuery';

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

export default function Calendar({events, onlyNow = false}) {
    const mobile = useMediaQuery('(max-width:599px)');
    const sortedEvents = [...(events?.items)].sort((a,b) => new Date(a.start.dateTime).getTime() - new Date(b.start.dateTime).getTime());
    const remainingEvents = sortedEvents?.filter(event => new Date(event.end.dateTime).getTime() > Date.now());
    const endedEvents = sortedEvents?.filter(event => new Date(event.end.dateTime).getTime() < Date.now());
    const allEvents = [...remainingEvents, ...endedEvents];
    return (
        <>
            {allEvents.map(event => {
                const happeningNow = new Date(event.start.dateTime).getTime() < Date.now() && new Date(event.end.dateTime).getTime() > Date.now();
                const ended = new Date(event.end.dateTime).getTime() < Date.now();
                const bg = happeningNow ? 'linear-gradient(135deg, rgba(187, 10, 0, 0.6), rgb(240, 100, 0, 0.6))' : ended ? 'rgba(181, 181, 181, 0.6)' : 'linear-gradient(135deg, rgba(33, 147, 200, 0.6), rgb(109, 213, 237, 0.6))'
                return ( onlyNow ? happeningNow : true ) && (
                <GlassBox key={event.id} sx={{ display: 'inline-block', margin: '8px', paddingX: '20px', paddingY: '12px', width: mobile ? '95%' : 'fit-content'}} background={bg}>
                    <Typography align="left" variant="h6" fontFamily="Montserrat" fontWeight="700" color="white">{event.summary}</Typography>
                    <Typography align="left" variant="body1" color="white">{weekday[new Date(event.start.dateTime).getDay()]}, {new Date(event.start.dateTime).toLocaleDateString()} <b>{event.location && ` (${event.location})`}</b></Typography>
                    <Typography align="left" variant="body1" color="white">{new Date(event.start.dateTime).toLocaleTimeString()} - {new Date(event.end.dateTime).toLocaleTimeString()}{ended && ' (Event Ended)'}</Typography>
                    {happeningNow && <Typography align="left" fontFamily="Montserrat" variant="body1" color="white"><b>~~ Happening now! ~~</b></Typography>}
                </GlassBox> ) }
            )}
        </>
      );
    }