import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import { postCampus } from '../reducers/campus'
import StudentForm from './NewStudentForm'



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
                <RaisedButton label="New Student" onClick={this.handleOpen} />
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
