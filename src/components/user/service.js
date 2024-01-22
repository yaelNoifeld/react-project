import React, { useState } from "react";
import { ListItemText, Button } from "@mui/material";
import { CardActions, CardContent, CardMedia, Card, CardActionArea } from '@mui/material';
import AddMeeting from "./addMeeting";
import { useAuth } from "../authContex";
import image1 from "../images/1.jpg";
import image2 from "../images/2.webp";
import image3 from "../images/3.jpeg";
import image4 from "../images/4.webp";
import image5 from "../images/5.jpg";
import image6 from "../images/6.jpg";
import image7 from "../images/7.jpeg";
import image8 from "../images/8.jpg";


export default function Service(props) {
    const [showAddMeeting, setShowAddMeeting] = useState(false);
    const isAdmin = useAuth().isAdmin;
    const images = [image1, image2, image3, image4, image5, image6, image7, image8];
    const handleMakeAppointment = () => {
        setShowAddMeeting(true);
    };

    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={images[props.id]}
                        alt="real-estate"
                    />
                    <CardContent>
                        <ListItemText primary={props.name} />
                        <ListItemText primary={props.description} />
                        <ListItemText primary={`price - ${props.price}`} />
                        <ListItemText primary={`duration - ${props.duration}`} />
                        <CardActions>
                            {isAdmin ? (<></>) : (
                                <>
                                    <Button variant="outlined" key={`service-${props.id}-meet`}
                                        onClick={handleMakeAppointment}>
                                        make an appointment
                                    </Button>
                                    {showAddMeeting && <AddMeeting servicType={props} />}
                                </>
                            )}
                        </CardActions>
                    </CardContent>
                </CardActionArea>

            </Card>
        </>
    );
}
