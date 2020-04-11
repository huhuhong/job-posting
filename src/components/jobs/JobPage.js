import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import JobList from "./JobList";
// import Spinner from "../Common/Spinner";
import { loadJobs }  from "../../actions/jobActions";


class JobPage extends React.Component {
    componentDidMount() {
        const { jobs, loadJobs } = this.props;
        if(jobs.length === 0){
            loadJobs().catch(error => {
                alert("Loading courses failed" + error);
            });
        }
    }
    
    render(){
        const { account } = this.props;
        const isLogin = account && account.isLogin;

        return(
            <>
                {isLogin && (<button
                style={{ marginBottom: 20 }}
                className="btn btn-primary add-course"
                onClick={() => this.props.history.push("/job")}
                >
                Post Job
                </button>
                )}        
                <JobList jobs={this.props.jobs} enabledEdit={isLogin}/>
            </>
        )
    }
}

JobPage.defaultProps = {
    jobs: []
};

JobPage.propTypes = {
    jobs: PropTypes.array.isRequired,
    loadJobs: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired,
}

const mapStateToProps  = state => {
    return {
        jobs: state.jobs,
        loading: state.apiCallsInProgress > 0,
        account: state.account
    }
};
const mapDispatchToProps  =  {
    loadJobs,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(JobPage);
  