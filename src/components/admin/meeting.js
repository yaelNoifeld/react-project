import { ListItemText, CardActionArea, CardContent, CardMedia, Card } from "@mui/material";
import image1 from "../images/1.jpg";
import image2 from "../images/2.webp";
import image3 from "../images/3.jpeg";
import image4 from "../images/4.webp";
import image5 from "../images/5.jpg";
import image6 from "../images/6.jpg";
import image7 from "../images/7.jpeg";
import image8 from "../images/8.jpg";

export default function Meeting(props) {
    const images = [image1, image2, image3, image4, image5, image6, image7, image8];
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={images[props.serviceType]}
                        alt="real-estate"
                    />
                    <CardContent>
                        <ListItemText primary={`service type : ${props.serviceType}`} />
                        <ListItemText rimary={`date : ${props.date}`} />
                        <ListItemText primary={`name:${props.clientName}`} />
                        <ListItemText primary={`phone:${props.clientPhone}`} />
                        <ListItemText primary={`email:${props.clientEmail}`} />
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
}



