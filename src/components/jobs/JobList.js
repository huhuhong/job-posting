import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const JobList = ( { jobs } ) => (
    <table className="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Location</th>
        <th>Description</th>
        <th>Posting Date</th>
        <th>Status</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {jobs.map(job => {
        return (
          <tr key={job.id}>
            <td>
              <Link to={"/job/" + job.id}>{job.title}</Link>
            </td>
            <td>{job.location}</td>
            <td>{job.description}</td>
            <td>{new Date(job.createdAt).toLocaleDateString()}</td>
            <td>{job.status}</td>
            {/* <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(job)}
              >
                Delete
              </button>
            </td> */}
          </tr>
        );
      })}
    </tbody>
  </table>
)

JobList.defaultProps = {
  jobs: []
};

JobList.propTypes = {
    jobs: PropTypes.array.isRequired,
    onDeleteClick: PropTypes.func.isRequired
};
  
export default JobList;