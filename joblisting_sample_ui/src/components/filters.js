import React , { useState } from 'react'
import { TextField ,  MenuItem , Button , Select } from '@mui/material';
import "../style/style.css"

const Filters = ({ filters , onFilterChange , onApplyFilter}) => {
    const [open, setOpen] = useState(false);

    const expOptions = [ '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '10' ];
    const remoteOptions = [ 'Remote' , 'Hybrid' , 'In-office' ];
    const noEmpOptions = [ '1-10' , '11-20' , '21-50' , '51-100' , '101-200' , '201-500' , '500+' ];
    const salaryOptions = [ '0L' , '10L' , '20L' , '30L' , '40L' , '50L' , '60L' , '70L' ];
    const enggOptions = [ 'Backend' , 'Frontend' , 'FullSatck' , 'IOS' , 'Flutter' , 'React Native' , 'Android' , 'Frontend'  , 'Tech Lead' , 'Dev-Ops' , 'Data Engineer' , 'Data Science' , 'Computer-vision' , 'NLP' , 'Deep-Learning' , 'Test/QA' , 'Web3' , 'Deep-Learning' , 'Sre' , 'Data-Infrastructure' ];
    const designOptions = [ 'Designer' , 'Design Manager' , 'Graphic Designer' , 'Product Designer' ];
    const opsOptions = [ 'Operations Manager' , 'Founder\'s office /Chief Of Staff' ];
    const salesOptions = [ 'Sales Development Representative' , 'Account Manager' ];
    const marketingOptions = [ 'Digital Marketing Manager' , 'Growth Hacker' , 'Marketing' , 'Product Marketing Manager' ];
    const otherEnggOPtions = [ 'hardware' , 'Mechanical' , 'Systems'];
    const locOptions = [ 'Bengaluru' , 'Hyderabad' , 'Delhi NCR' , 'Mumbai' , 'Chennai' , 'Remote' ];
    const techOptions = [ 'Python' , 'React' , 'node' , 'javaScript' ];
    
    const handleChange = (event) => {
        const { name , value , type , checked} = event.target;
        const val = type === 'checkbox' ? checked : value;
        onFilterChange( {
            ...filters,
            [name] : val
        });
    };

    const resetFilters = () => {
        const resetFilters = {};
        Object.keys(filters).forEach((filter) => {
            resetFilters[filter] = '';
        });
        onFilterChange(resetFilters);
    };

    return (
        <div className = 'filters'>
            <br />
            <TextField select SelectProps={{
                MenuProps: {
                PaperProps: {
                    style: {
                    maxHeight: 200,
                    },
                },
                },
                }}
                variant = 'outlined' 
                open = { open } 
                onOpen = { () => setOpen(true) }
                onClose = { () => setOpen(false) }
                name = "minExperience" 
                label = "Min Experience" 
                className = 'filter-input' 
                value = {filters.minExperience} 
                onChange = {handleChange}>
                    {expOptions.map(( option , index) => (
                        <MenuItem key = {index} value = {option}>
                            {option}
                        </MenuItem>
                    ))}
            </TextField>
            <TextField select SelectProps={{
                MenuProps: {
                PaperProps: {
                    style: {
                    maxHeight: 200,
                    },
                },
                },
                }} 
                name = "role" 
                label = "Roles" 
                className = 'filter-input' 
                value = {filters.role} 
                onChange = {handleChange}>
                    <MenuItem style={{ color: 'grey' , textDecoration: 'underline' , fontWeight: 'bold' }}>
                            Engineering
                    </MenuItem>
                    {enggOptions.map(( option , index) => (
                        <MenuItem key = {index} value = {option}>
                            {option}
                        </MenuItem>
                    ))}
                    <br />
                    <MenuItem style={{ color: 'grey' , textDecoration: 'underline' , fontWeight: 'bold' }}>
                            Design
                    </MenuItem>
                    {designOptions.map(( option , index) => (
                        <MenuItem key = {index} value = {option}>
                            {option}
                        </MenuItem>
                    ))}
                    <br />
                    <MenuItem style={{ color: 'grey' , textDecoration: 'underline' , fontWeight: 'bold' , fontWeight: 'bold' }}>
                            Operations
                    </MenuItem>
                    {opsOptions.map(( option , index) => (
                        <MenuItem key = {index} value = {option}>
                            {option}
                        </MenuItem>
                    ))}
                    <br />
                    <MenuItem style={{ color: 'grey' , textDecoration: 'underline' , fontWeight: 'bold' }}>
                            Sales
                    </MenuItem>
                    {salesOptions.map(( option , index) => (
                        <MenuItem key = {index} value = {option}>
                            {option}
                        </MenuItem>
                    ))}
                    <br />
                    <MenuItem style={{ color: 'grey' , textDecoration: 'underline' , fontWeight: 'bold' }}> 
                            Marketing
                    </MenuItem>
                    {marketingOptions.map(( option , index) => (
                        <MenuItem key = {index} value = {option}>
                            {option}
                        </MenuItem>
                    ))}
                    <br />
                    <MenuItem style={{ color: 'grey' , textDecoration: 'underline' , fontWeight: 'bold' }}>
                            Other Engineering
                    </MenuItem>
                    {otherEnggOPtions.map(( option , index) => (
                        <MenuItem key = {index} value = {option}>
                            {option}
                        </MenuItem>
                    ))}
            </TextField>
            <TextField select SelectProps={{
                MenuProps: {
                PaperProps: {
                    style: {
                    maxHeight: 1000,
                    },
                },
                },
                }} name = "noOfEmployees" label = "No of employees" className = 'filter-input' value = {filters.noOfEmployees} onChange = {handleChange}>
                    {noEmpOptions.map(( option , index) => (
                        <MenuItem key = {index} value = {option}>
                            {option}
                        </MenuItem>
                    ))}
            </TextField>
            <TextField select SelectProps={{
                MenuProps: {
                PaperProps: {
                    style: {
                    maxHeight: 200,
                    },
                },
                },
                }} name = "minBasePay" label = "Min Base Pay" className = 'filter-input' value = {filters.minBasePay} onChange = {handleChange}>
                    {salaryOptions.map(( option , index) => (
                        <MenuItem key = {index} value = {option}>
                            {option}
                        </MenuItem>
                    ))}
            </TextField>
            <TextField select SelectProps={{
                MenuProps: {
                PaperProps: {
                    style: {
                    maxHeight: 200,
                    },
                },
                },
                }} name = "location" label = "Location" className = 'filter-input' value = {filters.location} onChange = {handleChange}>
                    {locOptions.map(( option , index) => (
                        <MenuItem key = {index} value = {option}>
                            {option}
                        </MenuItem>
                    ))}
            </TextField>
            <TextField select SelectProps={{
                MenuProps: {
                PaperProps: {
                    style: {
                    maxHeight: 200,
                    },
                },
                },
                }} name = "isRemote" label = "Remote" className = 'filter-input' value = {filters.isRemote} onChange = {handleChange}>
                    {remoteOptions.map(( option , index) => (
                        <MenuItem key = {index} value = {option}>
                            {option}
                        </MenuItem>
                    ))}
            </TextField>
            <TextField select SelectProps={{
                MenuProps: {
                PaperProps: {
                    style: {
                    maxHeight: 200,
                    },
                },
                },
                }} name = "techStack" label = "Tech Stack" className = 'filter-input' value = {filters.techStack} onChange = {handleChange}>
                    {techOptions.map(( option , index) => (
                        <MenuItem key = {index} value = {option}>
                            {option}
                        </MenuItem>
                    ))}
            </TextField>
            <TextField name = "companyName" label = "Company name" className = 'filter-input' value = {filters.companyName} onChange = {handleChange}/>            
            <Button variant = 'outlined' onClick = {resetFilters}>Reset</Button>
        </div>
    );
};

export default Filters;

