import { combineReducers } from "redux";
import jobs from "./jobReducer";
import account from "./accountReducer";
import fileUpload from "./fileReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
    jobs,
    account,
    fileUpload,
    apiCallsInProgress
});

export default rootReducer;
