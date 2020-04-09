import React from 'react';
import { Route, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import JobPage from "../jobs/JobPage";
import LoginPage from "../login/LoginPage";
import ManageJobPage from '../jobs/ManageJobPage';

export const Content = ( { account } ) => {

  return (
    <>
      <Switch>
        <Route exact path="/" component={JobPage} />
        <Route path="/job/:id" component={ManageJobPage} />
        <Route path="/job" component={ManageJobPage} />        
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </>
  );
}
const mapStateToProps = state => ({
  account: state.account
});

export default connect(
  mapStateToProps,
  null
)(Content);
