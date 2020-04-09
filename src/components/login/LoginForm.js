import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import TextInput from "../common/TextInput";
// import SelectInput from "../common/SelectInput";

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "admin",
            password: "admin",
        }; 

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.onLogin({
            username: this.state.username,
            password: this.state.password,
        });
    }

    render(){

        return (
            <form onSubmit={this.handleSubmit}>
            <TextInput
                name="username"
                label="Username"
                value={this.state.username}
                onChange={(event) => this.setState({ username: event.target.value})}
                // error={errors.username}
            />
            <TextInput
                name="password"
                label="Password"
                value={this.state.password}
                onChange={(event) => this.setState({ password: event.target.value})}
                // error={errors.password}
                password
            />
                    <button type="submit" className="btn btn-primary">
                    {"Login"}
            </button>            
            </form>
        )
    }
}

export default LoginForm;