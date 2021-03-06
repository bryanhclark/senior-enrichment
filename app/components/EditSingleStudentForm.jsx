import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem';
import { withRouter } from 'react-router-dom'
import { editOneStudent } from '../reducers/singleStudent'
import { fetchOneCampus } from '../reducers/singleCampus'
const styles = {
    customWidth: {
        width: 200,
    },
};



const EditSingleStudentForm = (props) => {
    console.log(props)
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
            <TextField value={props.formProps.email} onChange={props.handleEmailChange} name="email" floatingLabelText="email" style={{ margin: 5 }} /><br />
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
        campuses: storeState.campuses,
        currentCampus: storeState.currentCampus
    }
}
function mapDispactToProps(dispatch, ownProps) {
    return {

        handleSubmit(event) {
            event.preventDefault();
            dispatch(fetchOneCampus(ownProps.formProps.value))
            dispatch(editOneStudent({
                id: ownProps.formProps.id,
                firstName: ownProps.formProps.firstName,
                lastName: ownProps.formProps.lastName,
                campusId: ownProps.formProps.value,
                email: ownProps.formProps.email,
                gpa: ownProps.formProps.gpa
            }, ownProps.history))

        }
    }
}

const EditSingleStudentFormContainer = connect(mapStateToProps, mapDispactToProps)(EditSingleStudentForm);

export default EditSingleStudentFormContainer;
