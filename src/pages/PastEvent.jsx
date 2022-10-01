import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {getAdminData, getEventData} from "../dataFetcher";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function PastEvent(props) {
    const [eventData, setEventData] = useState([]);
    getAdminData("63380b54f0c542eb6c2cff28", ({listOfEvents}) => {
        const data = JSON.parse(listOfEvents[0]);
        data.forEach(e => {
            getEventData(e, ({imageLink, title, description}) => {
                setEventData((prevState) => {
                    return [...prevState, {imageLink, title, description}]
                })
            })
        })
    });

    return (
        <Container sx={{py: 8}} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
                {eventData.map((card, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card
                            sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
                        >
                            <CardMedia
                                component="img"
                                sx={{
                                    pt: '56.25%',
                                }}
                                image={card.imageLink}
                                alt="random"
                            />
                            <CardContent sx={{flexGrow: 1}}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {card.title}
                                </Typography>
                                <Typography>
                                    {card.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">View</Button>
                                <Button size="small">Edit</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default PastEvent;