import { combineReducers } from "redux";
import jobs from "./jobReducer";
import account from "./accountReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
    jobs,
    account,
    apiCallsInProgress
});

export default rootReducer;
