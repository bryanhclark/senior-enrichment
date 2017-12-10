import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import { postCampus } from '../reducers/campus'
import EditSingleStudentForm from './EditSingleStudentForm'
import IconButton from 'material-ui/IconButton';
import Edit from 'material-ui/svg-icons/editor/mode-edit'
import { fetchOneStudent } from '../reducers/singleStudent'
import { withRouter } from 'react-router-dom'
import { fetchCampuses } from '../reducers/campus'



class EditSingleStudentContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.student.id,
            open: false,
            value: this.props.student.campusId,
            firstName: this.props.student.firstName,
            lastName: this.props.student.lastName,
            gpa: this.props.student.gpa
        };
        this.handleClose = this.handleClose.bind(this)
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
        this.handleLastNameChange = this.handleLastNameChange.bind(this)
        this.handleDropDownChange = this.handleDropDownChange.bind(this)
        this.handleGPAChange = this.handleGPAChange.bind(this)
    }

    componentDidMount() {
        this.props.loadStudent(this.props.match.params.studentId)
        this.props.loadCampuses()
    }
    componentWillReceiveProps() {
        this.setState({
            id: this.props.student.id,
            value: this.props.student.campusId,
            firstName: this.props.student.firstName,
            lastName: this.props.student.lastName,
            gpa: this.props.student.gpa
        })
    }
    handleFirstNameChange(event) {
        console.log(event.target.value)
        this.setState({ firstName: event.target.value })
    };
    handleLastNameChange(event) {
        console.log(event.target.value)
        this.setState({ lastName: event.target.value })
    };
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    handleDropDownChange = (event, index, value) => {
        console.log(value);
        this.setState({ value });
    }
    handleGPAChange(event) {
        console.log(event.target.value)
        this.setState({ gpa: event.target.value })
    }


    render() {
        return (
            <div>
                <IconButton onClick={this.handleOpen} tooltip='Edit Student'>
                    <Edit />
                    <Dialog
                        title="Edit  Student"
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                        titleStyle={{ textAlign: "center" }}
                    >

                        <EditSingleStudentForm
                            formProps={this.state}
                            handleClose={this.handleClose}
                            handleFirstNameChange={this.handleFirstNameChange}
                            handleLastNameChange={this.handleLastNameChange}
                            handleDropDownChange={this.handleDropDownChange}
                            handleGPAChange={this.handleGPAChange} />
                    </Dialog>
                </IconButton>
            </div>
        );
    }
}

function mapStateToProps(storeState) {
    return {
        student: storeState.currentStudent,
        campuses: storeState.campuses
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadStudent: (id) => {
            dispatch(fetchOneStudent(id))
        },
        loadCampuses: () => {
            dispatch(fetchCampuses())
        }
    }
}

const StudentFormContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(EditSingleStudentContainer))

export default StudentFormContainer;