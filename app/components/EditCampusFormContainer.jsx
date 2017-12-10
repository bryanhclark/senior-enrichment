import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import { postCampus } from '../reducers/campus'
import EditCampusForm from './EditCampusForm'
import IconButton from 'material-ui/IconButton';
import Edit from 'material-ui/svg-icons/editor/mode-edit'



class EditCampusContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.campus.id,
            open: false,
            name: this.props.campus.name,
            imageUrl: this.props.campus.imageUrl,
            description: this.props.campus.description

        };
        this.handleClose = this.handleClose.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleImageUrlChange = this.handleImageUrlChange.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)

    }
    handleNameChange(event) {
        console.log(event.target.value)
        this.setState({ name: event.target.value })

    };
    handleImageUrlChange(event) {
        console.log(event.target.value)
        this.setState({ imageUrl: event.target.value })
    };
    handleDescriptionChange(event) {
        console.log(event.target.value)
        this.setState({ description: event.target.value })
    };
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };


    render() {
        return (
            <div>
                <IconButton onClick={this.handleOpen} tooltip='Edit Campus'>
                    <Edit />
                    <Dialog
                        title="Edit  Campus"
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                        titleStyle={{ textAlign: "center" }}
                    >

                        <EditCampusForm
                            formProps={this.state}
                            handleClose={this.handleClose}
                            handleNameChange={this.handleNameChange}
                            handleDescriptionChange={this.handleDescriptionChange}
                            handleImageUrlChange={this.handleImageUrlChange} />
                    </Dialog>
                </IconButton>
            </div>
        );
    }
}



export default EditCampusContainer;