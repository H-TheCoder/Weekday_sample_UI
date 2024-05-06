import { combineReducers } from 'redux';
import JobReducer  from './jobReducer';
import FilterReducer from './filterReducer';

const RootReducer = combineReducers({
    jobs : JobReducer ,
    filters : FilterReducer
});

export default RootReducer;