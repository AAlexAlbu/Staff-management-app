import './EmployeeCard.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const EmployeeCard = (props) => {

    return (
        <>
            <div className = 'employee-card'>
                <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image = {props.image}
                    alt="employee photo"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}    
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.surname}    
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Locatie: {props.location}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Edit
                    </Button>
                </CardActions>
                </Card>
            </div>
        </>
    )
}


export default EmployeeCard;