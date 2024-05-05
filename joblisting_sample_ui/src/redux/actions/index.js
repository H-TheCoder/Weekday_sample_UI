import { Set_Filters , Load_Jobs } from "../actionType";

export const setFilters = (filters) => ({
    type : Set_Filters ,
    payload : filters 
});

export const loadJobs = () => ({
    type : Load_Jobs
});