import React from "react";
import { connect } from "react-redux";
import { getJob, saveJob } from "../../actions/jobActions";
// import PropTypes from "prop-types";
import JobForm from "./JobForm";
// import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

class ManageJobPage extends React.Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount(){
    //     if(this.props.match.params.id){
    //         this.props.getJob(this.props.match.params.id).catch(error => {
    //             alert("Loading job failed" + error);
    //         });
    //     }
    // }

    handleSubmit(data){
      debugger;
        this.props.saveJob(data)
        .then(() => {
          toast.success("Job saved.");
          this.props.history.push("/");
        })
        .catch(error => {
        //   setSaving(false);
        //   setErrors({ onSave: error.message });
        toast.error("Fail to save job.");

        });
    }

    render() {
        return (
            <JobForm onSubmit={this.handleSubmit} job={this.props.job}/>
        )
    }
}

export function getJobById(jobs, id) {
    return jobs.find(job => job.id === id) || null;
}

function mapStateToProps(state, ownProps) {
    const id = parseInt(ownProps.match.params.id,10);
    const job =
    id && state.jobs.length > 0
        ? getJobById(state.jobs, id)
        : {
          id: null,
          title: "",
          location: "",
          description: "",
          status: "open",
        };

    return {
      job,
      jobs: state.jobs    
    };
  }
  
  const mapDispatchToProps = {
    getJob,
    saveJob
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ManageJobPage);
  