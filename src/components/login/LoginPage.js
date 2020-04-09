import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LoginForm from "./LoginForm";
// import Spinner from "../Common/Spinner";
import { login }  from "../../actions/accountActions";
import { toast } from "react-toastify";


class LoginPage extends React.Component {
    
    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }
    
    async handleLogin(data){
        const result = await this.props.login(data);
        if(result) {
            toast.success("Login succesful");
            this.props.history.push("/");            
        } else {
            toast.error("Fail to login.")
        }
    }

    render() {
        return(
                <LoginForm 
                onLogin={this.handleLogin} 
                 errors={{}}/>        
        )
    }
}

LoginPage.defaultProps = {

};

LoginPage.propTypes = {
    login: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
}

function mapStateToProps (state) {
    return {
        ...state
    }
};

// function mapDispatchToProps() {
//     return {
//         login,
//     }
// };


const mapDispatchToProps = {
    login,
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginPage);
  