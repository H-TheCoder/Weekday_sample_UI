import React , { useState } from 'react'
import { TextField ,  MenuItem , Button , Select } from '@mui/material';
import "../style/style.css"

const Filters = ({ filters , onFilterChange , onApplyFilter}) => {
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
    const locOptions = [ 'Bengaluru' , 'Hyderabad' , 'Delhi' , 'Mumbai' ];
    const techOptions = [ 'Python' , 'React' , 'node' , 'javaScript' ];
    const handleChange = (event) => {
        const { name , value , type , checked} = event.target;
        const val = type === 'checkbox' ? checked : value;
        onFilterChange( {
            [name] : val
        });
    };

    return (
        <div>
            <TextField select SelectProps={{
                MenuProps: {
                PaperProps: {
                    style: {
                    maxHeight: 200,
                    },
                },
                },
                }} className = 'filter-input' name = "minExperience" label = "Min Experience" value = {filters.minExperience} onChange = {handleChange}>
                <div>
                    {expOptions.map(( option , index) => (
                        <MenuItem key = {index} value = {option}>
                            `option`
                        </MenuItem>
                    ))}
                </div>
            </TextField>
            <TextField select SelectProps={{
                MenuProps: {
                PaperProps: {
                    style: {
                    maxHeight: 200,
                    },
                },
                },
                }}  className = 'filter-input' name = "role" label = "Roles" value = {filters.role} onChange = {handleChange}>
                <div>
                    {enggOptions.map(( option , index) => (
                        <MenuItem key = {index} value = {option}>
                            `option`
                        </MenuItem>
                    ))}
                </div>
            </TextField>
            <TextField select SelectProps={{
                MenuProps: {
                PaperProps: {
                    style: {
                    maxHeight: 200,
                    },
                },
                },
                }} className = 'filter-input' name = "noOfEmployees" label = "No of employees" value = {filters.noOfEmployees} onChange = {handleChange}>
                <div>
                    {noEmpOptions.map(( option , index) => (
                        <MenuItem key = {index} value = {option}>
                            `option`
                        </MenuItem>
                    ))}
                </div>
            </TextField>
            <TextField select SelectProps={{
                MenuProps: {
                PaperProps: {
                    style: {
                    maxHeight: 200,
                    },
                },
                },
                }} className = 'filter-input' name = "minBasePay" label = "Min Base Pay" value = {filters.minBasePay} onChange = {handleChange}>
                <div>
                    {salaryOptions.map(( option , index) => (
                        <MenuItem key = {index} value = {option}>
                            'option'
                        </MenuItem>
                    ))}
                </div>
            </TextField>
            <TextField select SelectProps={{
                MenuProps: {
                PaperProps: {
                    style: {
                    maxHeight: 200,
                    },
                },
                },
                }} className = 'filter-input' name = "location" label = "Location" value = {filters.location} onChange = {handleChange}>
                <div>
                    {locOptions.map(( option , index) => (
                        <MenuItem key = {index} value = {option}>
                            `option`
                        </MenuItem>
                    ))}
                </div>
            </TextField>
            <TextField select SelectProps={{
                MenuProps: {
                PaperProps: {
                    style: {
                    maxHeight: 200,
                    },
                },
                },
                }} className = 'filter-input' name = "isRemote" label = "Remote" value = {filters.isRemote} onChange = {handleChange}>
                <div>
                    {remoteOptions.map(( option , index) => (
                        <MenuItem key = {index} value = {option}>
                            `option`
                        </MenuItem>
                    ))}
                </div>
            </TextField>
            <TextField select SelectProps={{
                MenuProps: {
                PaperProps: {
                    style: {
                    maxHeight: 200,
                    },
                },
                },
                }} className = 'filter-input' name = "techStack" label = "Tech Stack" value = {filters.techStack} onChange = {handleChange}>
                <div>
                    {techOptions.map(( option , index) => (
                        <MenuItem key = {index} value = {option}>
                            `option`
                        </MenuItem>
                    ))}
                </div>
            </TextField>
            <TextField name = "companyName" label = "Company name" className = 'filter-input' value = {filters.companyName} onChange = {handleChange}/>            
        </div>
    );
};

export default Filters;

