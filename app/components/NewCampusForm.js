import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import { postCampus } from '../reducers/campus'



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
        <form method='POST' onSubmit={props.handleSubmit}>
            <TextField name="name" floatingLabelText="Name" style={{ margin: 5 }} />
            <TextField name="imageUrl" floatingLabelText="image Url" style={{ margin: 5 }} /><br />
            <TextField name="description" floatingLabelText="Description" style={{ margin: 5 }} />
            <div style={{ textAlign: 'right', padding: 8, margin: '24px -24px -24px -24px' }}>
                {actions}
            </div>
        </form>
    )
}



function mapStateToProps(storeState) {

}
function mapDispactToProps(dispatch, ownProps) {
    return {

        handleSubmit(event) {
            event.preventDefault();
            dispatch(postCampus({
                name: event.target.name.value,
                imageUrl: event.target.imageUrl.value,
                description: event.target.description.value
            }, ownProps.history))

        }
    }
}

const FormContainer = connect(mapStateToProps, mapDispactToProps)(Form);

export default FormContainer;
