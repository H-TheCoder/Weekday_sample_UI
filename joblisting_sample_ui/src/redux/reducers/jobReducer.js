import { Load_Jobs } from "../actionType";
import apiJson from "../../apiResult.json"

const initialState = {
    jobList : []
};

const jobReducer = (state = initialState , action) => {
    switch(action.type) {
        case Load_Jobs:
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

export default jobReducer;