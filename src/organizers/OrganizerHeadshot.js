import { useRef, useState, useEffect } from 'react'
import { Typography, Box, Modal, Button } from '@mui/material'


export default function OrganizerHeadshot({ name, img, team, ...other }) {
    const imageRef = useRef(null);
    const [height, setHeight] = useState(0);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (imageRef) {
            setHeight(imageRef.current.height);
        }
        window.addEventListener('resize', () => {
            if (imageRef) {
                setHeight(imageRef.current.height);
            }
        }, false);
    }, [imageRef])

    const boxStyles = {
        '&:hover': {
            outline: '4px solid white',
            borderRadius: '10px',
            cursor: 'pointer',
        },
        transition: 'outline 0.25s linear',
    }

    const imageStyles = {
        position: "absolute",
        aspectRatio: "7/8",
        width: "100%",
        objectFit: "cover",
        zIndex: "-1",
        borderRadius: '10px',
    }
    const textBoxStyles = {
        position: "absolute",
        bottom: '4px',
        left: '4px',
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: '6px',
    }
    const nameStyles = { paddingLeft: '4px', paddingRight: '4px' }
    const teamStyles = { paddingLeft: '4px', paddingRight: '4px' }

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'fit-content',
        backgroundColor: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(6px)',
        border: '2px solid #000',
        padding: '1rem',
        borderRadius: '16px',
    };

    const lookup = {
        "email": "Email",
        "name": "Name",
        "team": "Role",
        "intro": "Introduction",
        "position": "URTC Work",
        "interests": "Interests",
        "spare_time": "Spare Team",
        "random": "Random Facts About Me",
      }

    return (
        <>
            <Box position="relative" sx={{ height: 'fit-content', height, ...boxStyles }} onClick={handleOpen}>
                <img ref={imageRef} src={`organizers/${img}`} style={imageStyles} />
                <Box style={textBoxStyles}>
                    <Typography variant="body2" style={nameStyles} color="white">{name}</Typography>
                </Box>
                <Box style={{ ...textBoxStyles, top: '4px', bottom: undefined }}>
                    <Typography variant="body2" style={teamStyles} color="white">{team}</Typography>
                </Box>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box style={modalStyle}>
                    <Typography variant="h6" color="white">
                        {Object.entries({name, team, ...other}).map(([key, value]) => {
                            if (value) {
                                return (<Box marginBottom="6px" key={key}>
                                    <Typography variant="h6" fontFamily="Montserrat" fontWeight="700" color="white">
                                        {key in lookup ? lookup[key] : key}
                                    </Typography>
                                    <Typography variant="body1" color="white">{value}</Typography>
                                </Box>)
                            } else {
                                return (<Box key={key}></Box>)
                            }
                    })}
                    </Typography>
                    <Button variant="contained" onClick={handleClose}> Close </Button>
                </Box>
            </Modal>
        </>
    );
} 