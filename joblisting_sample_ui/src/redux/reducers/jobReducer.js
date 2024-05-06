import { LOAD_JOBS } from "../actionType";
import apiJson from "../../apiResult.json"

const initialState = {
    jobList : []
};

const JobReducer = (state = initialState , action) => {
    switch(action.type) {
        case LOAD_JOBS:
            console.log(apiJson.jdList);
            // const apiJSON = fs.readFile("../../../../Joblist_Samples_API/apiResult.json");
            return {
                ...state,
                jobList : [...state.jobList , ...apiJson.jdList]
            };
        default:
            return state;
    }
};

export default JobReducer;