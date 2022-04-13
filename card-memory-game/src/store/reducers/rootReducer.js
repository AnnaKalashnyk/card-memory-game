import {combineReducers} from 'redux'
import areaReducer from "./areaReducer";
import stepsReducer from "./stepsReducer";

export default combineReducers({
    area: areaReducer,
    steps: stepsReducer
});
