import React , { useState , useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { Grid } from "@mui/material";
import JobCard from "../components/JobCard";
import Filters from "../components/filters";
import { setFiltersAction , loadJobsAction } from "../redux/actions";

const JobLists = () => {
    const dispatch = useDispatch();
    const jobs = useSelector((state => state.jobs.jobList));
    const filters = useSelector((state) => state.filters);
    const [ filteredJobs , setFilteredJobs ] = useState([]);

    useEffect(() => {
        dispatch(loadJobsAction());
    } , [dispatch]);

    const handleFilterChange = (newFilters) => {
        dispatch(setFiltersAction(newFilters));
    };

    const handleApplyFIlters = () => {
        const filteredJobs = jobs.filter((job) => {
            // Apply filters one by one
            if (filters.minExperience && job.experience < filters.minExperience) {
              return false; // Skip this job if experience is less than minExperience
            }
            if (filters.companyName && !job.companyName.toLowerCase().includes(filters.companyName.toLowerCase())) {
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
                    <Grid item xs = {12} sm ={6} md = {4} key = {job.jdUid}>
                        <JobCard job = {job} />
                    </Grid>
                ))}                
            </Grid>
        </div>
    );
};

export default JobLists;