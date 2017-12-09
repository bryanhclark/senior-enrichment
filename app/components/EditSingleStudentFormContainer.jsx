import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import { postCampus } from '../reducers/campus'
import EditSingleStudentForm from './EditSingleStudentForm'
import IconButton from 'material-ui/IconButton';
import Edit from 'material-ui/svg-icons/editor/mode-edit'



class EditSingleStudentContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.student.id,
            open: false,
            value: this.props.student.campusId,
            firstName: this.props.student.firstName,
            lastName: this.props.student.lastName,

        };
        this.handleClose = this.handleClose.bind(this)
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
        this.handleLastNameChange = this.handleLastNameChange.bind(this)
        this.handleDropDownChange = this.handleDropDownChange.bind(this)

    }
    handleFirstNameChange(event) {
        console.log(event.target.value)
        this.setState({ firstName: event.target.value })
    };
    handleLastNameChange(event) {
        console.log(event.target.value)
        this.setState({ lastName: event.target.value })
    };
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    handleDropDownChange = (event, index, value) => {
        console.log(value);
        this.setState({ value });
    }


    render() {
        return (
            <div>
                <IconButton onClick={this.handleOpen} tooltip='Edit Student'>
                    <Edit />
                    <Dialog
                        title="Edit  Student"
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                        titleStyle={{ textAlign: "center" }}
                    >

                        <EditSingleStudentForm
                            formProps={this.state}
                            handleClose={this.handleClose}
                            handleFirstNameChange={this.handleFirstNameChange}
                            handleLastNameChange={this.handleLastNameChange}
                            handleDropDownChange={this.handleDropDownChange} />
                    </Dialog>
                </IconButton>
            </div>
        );
    }
}



export default EditSingleStudentContainer;