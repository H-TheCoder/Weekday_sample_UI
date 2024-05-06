import { SET_FILTERS } from "../actionType";

const initialState = {
    minExperience : '' ,
    role : '' ,
    noOfEmployees : '' , 
    minBasePay : '' ,
    location : '' ,
    isRemote :  '', 
    techStack : '' ,
    companyName : ''    
};

const FilterReducer = (state = initialState , action) => {
    switch (action.type) {
        case SET_FILTERS:
            return {
                ...state ,
                ...action.payload
            };
        default:
            return state;
    }
};

export default FilterReducer;