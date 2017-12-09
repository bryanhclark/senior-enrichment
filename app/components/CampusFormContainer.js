import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import { postCampus } from '../reducers/campus'
import NewCampusForm from './NewCampusForm'

class CampusFormContainer extends Component {
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
                <RaisedButton label="New Campus" onClick={this.handleOpen} />
                <Dialog
                    title="Submit New Campus"
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    titleStyle={{ textAlign: "center" }}
                >

                    <NewCampusForm handleClose={this.handleClose} />
                </Dialog>
            </div>
        );
    }
}



export default CampusFormContainer;
