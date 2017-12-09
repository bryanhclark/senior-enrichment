import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import { postStudent } from '../reducers/student'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem';

const styles = {
    customWidth: {
        width: 200,
    },
};


const Form = (props) => {
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
            <DropDownMenu value={props.dropDownValue} style={styles.customWidth} onChange={props.handleDropDownChange}>
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
        newCampusEntry: storeState.newStudentEntry,
        campuses: storeState.campuses
    }
}
function mapDispactToProps(dispatch, ownProps) {
    return {

        handleSubmit(event) {
            event.preventDefault();
            dispatch(postStudent({
                firstName: event.target.firstName.value,
                lastName: event.target.lastName.value,
                campus: ownProps.dropDownValue
            }, ownProps.history))
        }
    }
}

const FormContainer = connect(mapStateToProps, mapDispactToProps)(Form);

export default FormContainer;
