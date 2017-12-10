import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem';
import { withRouter } from 'react-router-dom'
import { editStudent } from '../reducers/student'
const styles = {
    customWidth: {
        width: 200,
    },
};



const EditStudentForm = (props) => {
    console.log(props.campuses)
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
            <TextField value={props.formProps.firstName} onChange={props.handleFirstNameChange} name="firstName" floatingLabelText="First Name" style={{ margin: 5 }} />
            <TextField value={props.formProps.lastName} onChange={props.handleLastNameChange} name="lastName" floatingLabelText="Last Name" style={{ margin: 5 }} /><br />
            <TextField value={props.formProps.gpa} onChange={props.handleGPAChange} name="gpa" floatingLabelText="GPA" style={{ margin: 5 }} /><br />
            <DropDownMenu value={props.formProps.value} style={styles.customWidth} onChange={props.handleDropDownChange}>
                {props.campuses.map((campus, index) => (
                    <MenuItem value={campus.id} primaryText={campus.name} key={campus.id} name='campusId' />
                ))}
            </DropDownMenu>
            <div style={{ textAlign: 'right', padding: 8, margin: '24px -24px -24px -24px' }}>
                {actions}
            </div>
        </form>
    )
}



function mapStateToProps(storeState) {
    return {
        campuses: storeState.campuses
    }
}
function mapDispactToProps(dispatch, ownProps) {
    console.log(ownProps)
    return {

        handleSubmit(event) {
            event.preventDefault();
            dispatch(editStudent({
                id: ownProps.formProps.id,
                firstName: ownProps.formProps.firstName,
                lastName: ownProps.formProps.lastName,
                campusId: ownProps.formProps.value
            }, ownProps.history))
        }
    }
}

const EditStudentFormContainer = connect(mapStateToProps, mapDispactToProps)(EditStudentForm);

export default EditStudentFormContainer;
