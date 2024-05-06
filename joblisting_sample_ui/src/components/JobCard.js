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
        <Card className = "job-card">
            <CardContent onClick = {handleExpandClick}>
                <div className = 'card-header'>
                    <CardMedia
                        component = "img"
                        height = "50"
                        sx={{ width: '50px' }}
                        image={ job.logoUrl }
                        alt="Company Logo"
                    />
                    <Typography variant = "h3" className = 'company'> { job.companyName }</Typography>
                </div>
                <Typography variant = "subtitle1" className = 'roloc'> { job.jobRole } | { job.location }</Typography>
                <Typography variant = "h5">Estimated Salary: {job.minJdSalary} - {job.maxJdSalary} {job.salaryCurrencyCode}</Typography>
                <Typography variant = "subtitle1" style={{ color: 'grey' , textDecoration: 'underline' }}>Job ID: { job.jdUid}</Typography>
                <Typography variant = "h6" className = 'about'>About Company:</Typography>
                <Typography variant = "h6" className = 'about'>About Us:</Typography>
                <Typography variant="body2" className='description'>
                    {expanded ? job.jobDetailsFromCompany : truncateText(job.jobDetailsFromCompany, 100)}
                </Typography>
                {!expanded && (
                    <div className = 'view-job-container'>
                        <Typography variant="body2" color="primary" onClick={handleExpandClick}>
                            View Job...
                        </Typography>
                    </div>
                )}
                <Typography variant = "body1" className = 'experience'>Minimum Experience:<br /> { job.minExp }</Typography>
                <Typography variant = "body1" className = 'experience'>Maximum Experience:<br /> { job.maxExp }</Typography>
                <Button variant = "contained" color = "primary" href={job.jdLink} target="_blank" rel="noopener noreferrer" className = 'apply-btn'>Easy Apply</Button>
            </CardContent>
        </Card>
    );
};

export default JobCard;