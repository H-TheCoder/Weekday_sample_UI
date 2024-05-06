import { SET_FILTERS , LOAD_JOBS } from "../actionType";

export const setFiltersAction = (filters) => ({
    type : SET_FILTERS ,
    payload : filters 
});

export const loadJobsAction = () => ({
    type : LOAD_JOBS
});