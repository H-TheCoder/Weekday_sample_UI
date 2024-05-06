import React from 'react';
import { Card , CardContent , Typography , Button , CardMedia } from '@mui/material';
import '../style/style.css'


const JobCard = ({ job }) => {
    return (
        <Card>
            <CardMedia
                component = "img"
                height = "50"
                sx={{ width: '50px' }}
                image={ job.logoUrl }
                alt="Company Logo"
            />
            <CardContent>
                <Typography variant = "h3" className = 'company'> { job.companyName }</Typography>
                <Typography variant = "subtitle1" className = 'role'> { job.jobRole }</Typography>
                <Typography variant = "subtitle2" className = 'location'> { job.location }</Typography>
                <Typography variant="h5">Estimated Salary: {job.minJdSalary} - {job.maxJdSalary} {job.salaryCurrencyCode}</Typography>
                <Typography variant = "body2" className = 'description'><h4>About Company:</h4><br /><h5>About us:</h5><br /> <h5>Job Id: {job.jdUid}</h5><br />   { job.jobDetailsFromCompany }</Typography>
                <Typography variant = "body1" className = 'experience'>Minimum Experience:<br /> { job.minExp }</Typography>
                <Typography variant = "body1" className = 'experience'>Maximum Experience:<br /> { job.maxExp }</Typography>
                <Button variant = "contained" color = "primary" href={job.jdLink} target="_blank" rel="noopener noreferrer" className = 'job'>Easy Apply</Button>
            </CardContent>
        </Card>
    );
};

export default JobCard;