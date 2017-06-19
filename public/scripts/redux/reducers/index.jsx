import {combineReducers} from "redux";
// import reducers and combine them here
const initialDefaultState = {}

const reducers = combineReducers({
    defaultReducer: (state, action) => initialDefaultState
});

export default reducers;