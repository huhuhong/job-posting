import * as types from "./actionTypes";
import * as fileApi from "../api/fileApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function uploadFileSuccess(fileReturned) {
    return { type: types.UPLOAD_FILE_SUCCESS, fileReturned };
  }

export function uploadFile(file) {
    return function(dispatch) {
      dispatch(beginApiCall());
      return fileApi
        .upload(file)
        .then(fileReturned => {
            dispatch(uploadFileSuccess(fileReturned));
        })
        .catch(error => {
          dispatch(apiCallError(error));
          throw error;
        });
    };
  }
