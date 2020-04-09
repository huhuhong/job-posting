import * as types from "./actionTypes";
import * as jobApi from "../api/jobApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadJobSuccess(jobs) {
    return { type: types.LOAD_JOBS_SUCCESS, jobs };
  }
  
export function getJobSuccess(job) {
    return { type: types.GET_JOB_SUCCESS, job };
  }
    
export function createJobSuccess(job) {
  return { type: types.CREATE_JOB_SUCCESS, job };
}

export function updateJobSuccess(job) {
  return { type: types.UPDATE_JOB_SUCCESS, job };
}

export function getJob(id) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return jobApi
      .getJob(id)
      .then(job => {
        dispatch(getJobSuccess(job));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function loadJobs() {
    return function(dispatch) {
      dispatch(beginApiCall());
      return jobApi
        .getJobs()
        .then(courses => {
          dispatch(loadJobSuccess(courses));
        })
        .catch(error => {
          dispatch(apiCallError(error));
          throw error;
        });
    };
  }


  export function saveJob(job) {
    //eslint-disable-next-line no-unused-vars
    return function(dispatch, getState) {
      dispatch(beginApiCall());
      return jobApi
        .saveJob(job)
        .then(savedJob => {
          job.id
            ? dispatch(updateJobSuccess(savedJob))
            : dispatch(createJobSuccess(savedJob));
        })
        .catch(error => {
          dispatch(apiCallError(error));
          throw error;
        });
    };
  }