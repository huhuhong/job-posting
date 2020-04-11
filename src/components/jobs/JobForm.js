import React from "react";
// import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import FileInput from "../common/FileInput";
import { uploadFile } from "../../actions/fileAction";
import { connect } from "react-redux";


class JobForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.job.id,
            title: props.job.title,
            location: props.job.location,
            description: props.job.description,
            status: props.job.status,
            file: null,
            errors: {},
        }; 

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
        this.formIsValid = this.formIsValid.bind(this);
    }


  formIsValid() {
    const { title, location, description } = this.state;
    const errors = {};

    if (!title) errors.title = "Title is required.";
    if (!location) errors.location = "Location is required";
    if (!description) errors.description = "Description is required";

    this.setState({
        errors
    })
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

    handleFileUpload(event){
        event.preventDefault();
        const file = event.target.files[0];
        this.props.uploadFile(file);
    }

    handleSubmit(event){
        event.preventDefault();
        if(this.formIsValid()) {
            this.props.onSubmit({
                id: this.state.id,
                title: this.state.title,
                location: this.state.location,
                description: this.state.description,
                status: this.state.status,
                fileName: this.props.fileUploaded ? this.props.fileUploaded.filename : "",
            });
        }
    }
    
    render() {
        const { errors } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <h2>{this.props.job.id ? "Edit" : "Add"} Job</h2>

                    <TextInput
                        name="title"
                        label="Title"
                        value={this.state.title}
                        onChange={(event) => this.setState({ title: event.target.value})}
                        error={errors.title}
                    />

                    <TextInput
                        name="location"
                        label="Location"
                        value={this.state.location}
                        onChange={(event) => this.setState({ location: event.target.value})}
                        error={errors.location}
                    />

                    <TextInput
                        name="description"
                        label="Description"
                        value={this.state.description}
                        onChange={(event) => this.setState({ description: event.target.value})}
                        error={errors.description}
                    />

                    <SelectInput
                        name="status"
                        label="Status"
                        value={this.state.status}
                        defaultOption="Select Status"
                        options={[
                            { value: "open", text: "Open"},
                            { value: "close", text: "Closed"},
                        ]}
                        onChange={(event) => this.setState({ status: event.target.value})}
                    />

                     <FileInput
                        name="document"
                        label="Document"
                        onChange={this.handleFileUpload}
                    />

                    <button type="submit" className="btn btn-primary">
                        {"Save"}
                    </button>                              
            </form>
        )
    }


}

const mapStateToProps  = state => {
    return {
        fileUploaded: state.fileUpload.file,
    }
};
const mapDispatchToProps  =  {
    uploadFile,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(JobForm);
  