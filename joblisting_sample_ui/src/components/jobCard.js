import React from 'react';
import { Card , CardContent , Typography , Button } from '@mui/material';
import '../style/style.css'


const jobCard = ({ job }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant = "h5" className = 'tile'> { job.title }</Typography>
                <Typography variant = "subtitle1" className = 'company'> { job.comapny }</Typography>
                <Typography variant = "body1" className = 'location'> { job.location }</Typography>
                <Typography variant = "body2" className = 'description'> { job.description }</Typography>
                <Typography variant = "body1" className = 'experience'>Experience Required: { job.experience }</Typography>
                <Button variant = "contained" color = "primary" className = 'job'>Apply</Button>
            </CardContent>
        </Card>
    );
};

export default jobCard;