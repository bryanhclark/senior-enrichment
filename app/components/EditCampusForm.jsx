import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem';
import { withRouter } from 'react-router-dom'
import { editOneCampus } from '../reducers/singleCampus'
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
            <TextField value={props.formProps.name} onChange={props.handleNameChange} name="name" floatingLabelText="Name" style={{ margin: 5 }} />
            <TextField value={props.formProps.imageUrl} onChange={props.handleImageUrlChange} name="imageUrl" floatingLabelText="imageUrl" style={{ margin: 5 }} /><br />
            <TextField value={props.formProps.description} onChange={props.handleDescriptionChange} name="Description" floatingLabelText="Description" style={{ margin: 5 }} />

            <div style={{ textAlign: 'right', padding: 8, margin: '24px -24px -24px -24px' }}>
                {actions}
            </div>
        </form>
    )
}



function mapStateToProps(storeState) {
    return {
        currentCampus: storeState.currentCampus
    }
}
function mapDispactToProps(dispatch, ownProps) {
    return {

        handleSubmit(event) {
            event.preventDefault();
            dispatch(editOneCampus({
                id: ownProps.formProps.id,
                name: ownProps.formProps.name,
                imageUrl: ownProps.formProps.imageUrl,
                description: ownProps.formProps.description
            }, ownProps.history))
        }
    }
}

const EditSingleStudentFormContainer = connect(mapStateToProps, mapDispactToProps)(EditSingleStudentForm);

export default EditSingleStudentFormContainer;
