import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import { addCurrentStudentTHUNK } from '../reducers/currentStudents'
import MenuItem from 'material-ui/MenuItem';
import { withRouter } from 'react-router-dom'

const styles = {
    customWidth: {
        width: 200,
    },
};


const NewStudentToCampusForm = (props) => {
    console.log(props);
    const actions = [
        <FlatButton
            label="Cancel"
            primary={false}
            onClick={props.handleClose} key='1' />,
        <FlatButton
            label="Submit"
            primary={false}
            keyboardFocused={false}
            type='submit'
            key='2'
            onClick={props.handleClose} />,
    ];
    return (
        <form method='POST' onSubmit={props.handleSubmit} >
            <TextField name="firstName" floatingLabelText="First Name" style={{ margin: 5 }} />
            <TextField name="lastName" floatingLabelText="Last Name" style={{ margin: 5 }} /><br />
            <TextField name="gpa" floatingLabelText="GPA" style={{ margin: 5 }} /><br />
            <div style={{ textAlign: 'right', padding: 8, margin: '24px -24px -24px -24px' }}>
                {actions}
            </div>
        </form>
    )
}



function mapStateToProps(storeState) {
    return {
        currentStudents: storeState.currentStudents

    }
}
function mapDispactToProps(dispatch, ownProps) {
    console.log(ownProps)
    return {
        handleSubmit(event) {
            event.preventDefault();
            dispatch(addCurrentStudentTHUNK({
                firstName: event.target.firstName.value,
                lastName: event.target.lastName.value,
                campus: ownProps.currentCampus.id,
                gpa: event.target.gpa.value
            }, ownProps.history))
        }
    }
}

const NewStudentToCampusFormContainer = connect(mapStateToProps, mapDispactToProps)(NewStudentToCampusForm);

export default NewStudentToCampusFormContainer;
