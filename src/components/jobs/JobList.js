import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const baseUrl = process.env.REACT_APP_API_URL + "/document/";

const JobList = ( { jobs, enabledEdit } ) => (
    <table className="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Location</th>
        <th>Description</th>
        <th>Posting Date</th>
        <th>Status</th>
        <th></th>
        <th />
      </tr>
    </thead>
    <tbody>
      {jobs.map(job => {
        return (
          <tr key={job.id}>
            <td>
              {enabledEdit && (<Link to={"/job/" + job.id}>{job.title}</Link>)}
              {!enabledEdit && (job.title)}
            </td>
            <td>{job.location}</td>
            <td>{job.description}</td>
            <td>{new Date(job.createdAt).toLocaleDateString()}</td>
            <td>{job.status}</td>
            {job.fileName && (<td><a target="blank" href={`${baseUrl}${job.fileName}`}>Download</a> </td>)}
          </tr>
        );
      })}
    </tbody>
  </table>
)

JobList.defaultProps = {
  jobs: [],
  enabledEdit: false
};

JobList.propTypes = {
    jobs: PropTypes.array.isRequired,
    enabledEdit: PropTypes.bool.isRequired,
};
  
export default JobList;