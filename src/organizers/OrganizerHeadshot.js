import { useRef } from 'react'
import { Typography, Box } from '@mui/material'


export default function OrganizerHeadshot({name, img, team, ...other}) {
    const imageRef = useRef(null);

    const imageStyles = { position: "absolute",  aspectRatio: "1 / 1", width: "100%", objectFit: "cover", zIndex:"-1"}
    const nameStyles = { zIndex: "1", bottom: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', paddingX: '5px', paddingY: '2px'}
    const teamStyles = { zIndex: "1"}
    return (
        <Box position="relative" style={{height: 'fit-content'}}>
            <img ref={imageRef} src={`organizers/${img}`} style={imageStyles}/>
            <Typography style={nameStyles} color="white">{name}</Typography>
            <Typography style={teamStyles} color="white">{team}</Typography>
        </Box>
    );
} 