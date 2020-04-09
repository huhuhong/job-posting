import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function jobReducer(state = initialState.jobs, action) {
  switch (action.type) {
    case types.CREATE_JOB_SUCCESS:
      return [...state, { ...action.job }];
    case types.UPDATE_JOB_SUCCESS:
      return state.map(job =>
        job.id === action.job.id ? action.job : job
      );
    case types.GET_JOB_SUCCESS:
      return [...state, { ...action.job }];
    case types.LOAD_JOBS_SUCCESS:
      return action.jobs;
    // case types.DELETE_COURSE_OPTIMISTIC:
    //   return state.filter(course => course.id !== action.course.id);
    default:
      return state;
  }
}
