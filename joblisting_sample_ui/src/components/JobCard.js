import React , { useState } from 'react';
import { Card , CardContent , Typography , Button , CardMedia , Collapse } from '@mui/material';
import '../style/style.css'


const JobCard = ({ job }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + "...";
    };

    return (
        <Card>
            <CardMedia
                component = "img"
                height = "50"
                sx={{ width: '50px' }}
                image={ job.logoUrl }
                alt="Company Logo"
            />
            <CardContent onClick = {handleExpandClick}>
                <Typography variant = "h3" className = 'company'> { job.companyName }</Typography>
                <Typography variant = "subtitle1" className = 'role'> { job.jobRole }</Typography>
                <Typography variant = "subtitle2" className = 'location'> { job.location }</Typography>
                <Typography variant="h5">Estimated Salary: {job.minJdSalary} - {job.maxJdSalary} {job.salaryCurrencyCode}</Typography>
                <Typography variant="body2" className='description'>
                    {expanded ? job.jobDetailsFromCompany : truncateText(job.jobDetailsFromCompany, 100)}
                </Typography>
                {!expanded && (
                    <Typography variant="body2" color="primary" onClick={handleExpandClick}>
                        View Job...
                    </Typography>
                )}
                <Typography variant = "body1" className = 'experience'>Minimum Experience:<br /> { job.minExp }</Typography>
                <Typography variant = "body1" className = 'experience'>Maximum Experience:<br /> { job.maxExp }</Typography>
                <Button variant = "contained" color = "primary" href={job.jdLink} target="_blank" rel="noopener noreferrer" className = 'job'>Easy Apply</Button>
            </CardContent>
        </Card>
    );
};

export default JobCard;