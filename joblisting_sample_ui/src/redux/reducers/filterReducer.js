import { Set_Filters } from "../actionType";

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

const filterReducer = (state = initialState , action) => {
    switch (action.type) {
        case Set_Filters:
            return {
                ...state ,
                ...action.payload
            };
        default:
            return state;
    }
};

export default filterReducer;