import React , { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { Grid } from "@mui/material";
import jobCard from "../components/jobCard";
import Filters from "../components/filters";
import { setFilters , loadJobs } from "../redux/actions";

const jobLists = () => {
    const dispatch = useDispatch();
    const jobs = useSelector((state => state.jobs.jobLists));
    const filters = useSelector((state) => state.filters);

    useEffect(() => {
        dispatch(loadJobs());
    } , [dispatch]);

    const handleFilterChange = (newFilters) => {
        dispatch(setFilters(newFilters));
    };

    const handleApplyFIlters = () => {

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