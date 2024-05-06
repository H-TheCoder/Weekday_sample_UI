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
    } , [loading]);

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
        dispatch(setFiltersAction(newFilters));
    };

    const handleApplyFIlters = () => {
        const filteredJobs = jobs.filter((job) => {
            // Apply filters one by one
            if (filters.minExperience !== null && filters.minExperience) {
              return job.minExp >= parseInt(filters.minExperience); // Skip this job if experience is less than minExperience
            }
            if (filters.companyName) {
              return job.companyName.toLowerCase().includes(filters.companyName.toLowerCase()); // Skip this job if company name doesn't match
            }
            if (filters.role) {
                return job.jobRole.toLowerCase().includes(filters.role.toLowerCase());
            }
            if(filters.minBasePay !== null && filters.minBasePay) {
                return job.minJdSalary >= parseInt(filters.minBasePay);
            }
            if(filters.location) {
                return job.location.toLowerCase().includes(filters.location.toLowerCase());
            }

            //other filters not working as data not provided in API json

            //if job passes through all filters, return true to include it in filteredJobs
            return true;
          });
      
          // Update state with filtered jobs
          setFilteredJobs(filteredJobs);
    };

    return (
        <div>
            <Filters filters = {filters} onFilterChange = {handleFilterChange} onApplyFilter = {handleApplyFIlters}/>
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