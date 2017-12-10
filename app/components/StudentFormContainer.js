import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import { postCampus } from '../reducers/campus'
import StudentForm from './NewStudentForm'
import AddPerson from 'material-ui/svg-icons/social/person-add'
import IconButton from 'material-ui/IconButton';


class StudentFormContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            value: 1

        };
        this.handleClose = this.handleClose.bind(this)
        this.handleDropDownChange = this.handleDropDownChange.bind(this)

    }
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    handleDropDownChange = (event, index, value) => {
        this.setState({ value });
    }

    render() {
        return (
            <div>
                <IconButton onClick={this.handleOpen} tooltip='Add Student'>
                    <AddPerson />
                </IconButton>
                <Dialog
                    title="Submit New Student"
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    titleStyle={{ textAlign: "center" }}
                >

                    <StudentForm dropDownValue={this.state.value} handleClose={this.handleClose} handleDropDownChange={this.handleDropDownChange} />
                </Dialog>
            </div>
        );
    }
}



export default StudentFormContainer;
