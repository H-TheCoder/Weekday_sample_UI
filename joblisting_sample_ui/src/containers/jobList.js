import React , { useEffect, useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { Grid } from "@mui/material";
import jobCard from "../components/jobCard";
import Filters from "../components/filters";
import { setFilters , loadJobs } from "../redux/actions";

const jobLists = () => {
    const dispatch = useDispatch();
    const jobs = useSelector((state => state.jobs.jobLists));
    const filters = useSelector((state) => state.filters);
    const [ filteredJobs , setFilteredJobs ] = useState([]);

    useEffect(() => {
        dispatch(loadJobs());
    } , [dispatch]);

    const handleFilterChange = (newFilters) => {
        dispatch(setFilters(newFilters));
    };

    const handleApplyFIlters = () => {
        const filteredJobs = jobs.filter((job) => {
            // Apply filters one by one
            if (filters.minExperience && job.experience < filters.minExperience) {
              return false; // Skip this job if experience is less than minExperience
            }
            if (filters.companyName && !job.company.toLowerCase().includes(filters.companyName.toLowerCase())) {
              return false; // Skip this job if company name doesn't match
            }
            // Apply other filters similarly
      
            // If job passes through all filters, return true to include it in filteredJobs
            return true;
          });
      
          // Update state with filtered jobs
          setFilteredJobs(filteredJobs);
    };

    return (
        <div>
            <Filters filters = {filters} onFilterChange = {handleFilterChange} onApplyFilter = {handleApplyFIlters}/>
            <Grid container spacing = {3}>
                {jobs.map((job) => (
                    <Grid item xs = {12} sm ={6} md = {4} key = {job.id}>
                        <jobCard job = {job} />
                    </Grid>
                ))}                
            </Grid>
        </div>
    );
};

export default jobLists;