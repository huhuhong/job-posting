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
        }; 

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
    }

    handleFileUpload(event){
        event.preventDefault();
        const file = event.target.files[0];
        this.props.uploadFile(file);
    }

    handleSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target);
        this.props.onSubmit({
            id: this.state.id,
            title: data.get("title"),
            location: data.get("location"),
            description: data.get("description"),
            status: data.get("status"),
            fileName: this.props.fileUploaded ? this.props.fileUploaded.filename : "",
        });
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>{this.props.job.id ? "Edit" : "Add"} Job</h2>

                    <TextInput
                        name="title"
                        label="Title"
                        value={this.state.title}
                        onChange={(event) => this.setState({ title: event.target.value})}
                        // error={errors.title}
                    />

                    <TextInput
                        name="location"
                        label="Location"
                        value={this.state.location}
                        onChange={(event) => this.setState({ location: event.target.value})}
                        // error={errors.category}
                    />

                    <TextInput
                        name="description"
                        label="Description"
                        value={this.state.description}
                        onChange={(event) => this.setState({ description: event.target.value})}
                        // error={errors.category}
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
                        // error={errors.author}
                    />

                     <FileInput
                        name="document"
                        label="Document"
                        onChange={this.handleFileUpload}
                        // onChange={(event) =>  this.setState({file: event.target.files[0]})}
                        // error={errors.category}
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
  