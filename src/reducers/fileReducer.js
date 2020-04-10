import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function accountReducer(state = initialState.fileUpload, action) {
    switch (action.type) {
        case types.UPLOAD_FILE_SUCCESS:
            return {
                ...state,
                file:action.fileReturned.file,
            }

        default:
            return state;
    }
}