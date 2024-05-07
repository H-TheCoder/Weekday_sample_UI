import React , { useState , useEffect ,useCallback } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { Button, Grid } from "@mui/material";
import JobCard from "../components/JobCard";
import Filters from "../components/filters";
import { setFiltersAction , loadJobsAction } from "../redux/actions";

const JobLists = () => {
    const dispatch = useDispatch();
    const jobs = useSelector((state => state.jobs.jobList));
    const filters = useSelector((state) => state.filters);
    const [ filteredJobs , setFilteredJobs ] = useState(jobs);
    const [ loading , setLoading ] = useState(false);
    const [ page , setPage ] = useState(1);
    const pageSize = 10;

    useEffect(() => {
        dispatch(loadJobsAction());
    } , [dispatch]);

    useEffect(() => {
        setFilteredJobs(jobs);
    } , [jobs]);

    

    const loadMoreJobs = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON');
            if (!response.ok) {
                throw new Error('Network response error');
            }
            const jsonData = await response.json();
            const newJobs = jsonData.jdList;
            setFilteredJobs(prevJobs => [...prevJobs, ...newJobs]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);
        setPage(prevPage => prevPage + 1);
    };

    const handleFilterChange = (newFilters) => {
        dispatch(setFiltersAction(newFilters)); // adds new filter selected
        dispatch(applyFilters);
    };

    const applyFilters = useCallback(() => {
        const filtered = jobs.filter((job) => {
            // Apply filters one by one
            if (filters.minExperience !== null && filters.minExperience) {
              return job.minExp >= parseInt(String(filters.minExperience)) && job.maxExp <= parseInt(String(filters.minExperience)); // Skip this job if experience is less than minExperience
            }
            if (filters.companyName) {
              return !job.companyName.toLowerCase().includes(String(filters.companyName).toLowerCase()); // Skip this job if company name doesn't match
            }
            if (filters.role) {
                return job.jobRole.toLowerCase().includes(filters.role.toLowerCase());
            }
            if(filters.minBasePay !== null && filters.minBasePay) {
                return job.minJdSalary >= parseInt(String(filters.minBasePay).replace("L" , ""));
            }
            if(filters.location) {
                return job.location.toLowerCase().includes(String(filters.location).toLowerCase());
            }

            //other filters not working as data not provided in API json

            //if job passes through all filters, return true to include it in filteredJobs
            return true;
          });
      
          // Update state with filtered jobs
          setFilteredJobs(filtered);
    } , [ jobs , filters]);

    useEffect(() => {
        applyFilters();
        console.log('Filters updated:', filters);
        console.log('Filters updated:', filteredJobs);
    } , [jobs , filters, applyFilters, filteredJobs]);

    useEffect(() => {
        const handleScroll = () => {
            if(window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100 && !loading) {
                loadMoreJobs();
            }
        };
        window.addEventListener('scroll' , handleScroll);
        return () => {
            window.removeEventListener('scroll' , handleScroll);
        };
    } , [loading , applyFilters]);

    return (
        <div>
            <Filters filters = {filters} onFilterChange = {handleFilterChange} />
            {loading ? (
                <p>Loading...</p>
            ) : (
                <Grid container spacing = {3}>
                
                {filteredJobs.map((job) => (
                    <Grid item xs = {12} sm ={6} md = {4} key = {job.jdUid}>
                        <JobCard job = {job} />
                    </Grid>
                ))}                
            </Grid>
            )}
        </div>
    );
};

export default JobLists;