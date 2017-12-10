import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import { postCampus } from '../reducers/campus'
import NewStudentToCampusForm from './NewStudentToCampusForm'
import IconButton from 'material-ui/IconButton';
import AddPerson from 'material-ui/svg-icons/social/person-add'


class NewStudentToCampusContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,

        };
        this.handleClose = this.handleClose.bind(this)


    }
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };


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
                    <NewStudentToCampusForm currentCampus={this.props.currentCampus} handleClose={this.handleClose} />
                </Dialog>
            </div>
        );
    }
}


function mapStateToProps(storeState) {
    return {
        currentCampus: storeState.singleCampus
    }
}


const StudentToCampusContainer = connect(mapStateToProps)(NewStudentToCampusContainer)

export default StudentToCampusContainer;
