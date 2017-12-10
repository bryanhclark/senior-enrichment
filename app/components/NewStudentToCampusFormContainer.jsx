import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import { postCampus } from '../reducers/campus'
import NewStudentToCampusForm from './NewStudentToCampusForm'


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
                <RaisedButton label="New Student" onClick={this.handleOpen} />
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
