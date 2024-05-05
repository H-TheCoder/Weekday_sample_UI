import React from 'react';
import { Card , CardContent , Typography , Button } from '@mui/material';

const jobCard = ({ job }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant = "h5"> { job.title }</Typography>
                <Typography variant = "subtitle1"> { job.comapny }</Typography>
                <Typography variant = "body1"> { job.location }</Typography>
                <Typography variant = "body2"> { job.description }</Typography>
                <Typography variant = "body1">Experience Required: { job.experience }</Typography>
                <Button variant = "contained" color = "primary">Apply</Button>
            </CardContent>
        </Card>
    );
};

export default jobCard;