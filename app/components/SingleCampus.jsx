import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchOneCampus } from '../reducers/singleCampus'
import { fetchCurrentStudents } from '../reducers/currentStudents'
import NewStudentToCampusFormContainer from './NewStudentToCampusFormContainer'
import { NavLink } from 'react-router-dom'
import DeleteButton from 'material-ui/svg-icons/action/delete'
import IconButton from 'material-ui/IconButton';
import { deleteCampusThunk } from '../reducers/campus'
import { deleteSTUDENT } from '../reducers/student'
import StudentList from './StudentList'


class SingleCampus extends Component {

    constructor(props) {
        super(props)
        this.state = {
            disabled: true
        }

        this.checkDisabled = this.checkDisabled.bind(this);
    }
    componentDidMount() {
        this.props.loadCampus(this.props.match.params.campusId)
        this.props.loadStudents(this.props.match.params.campusId)

    }

    checkDisabled = () => {
        return !(this.props.students.length === 0)
    }

    render() {
        return (
            <div id='singleSchoolContainer'>
                <div className='singleSchoolName'>
                    <h1>{this.props.campus.name}</h1>
                </div>
                <div className='currentStudentList'>
                    <ul>
                        {
                            this.props.students.map(student => (
                                <li key={student.id}>
                                    {student.fullName} - <NavLink to={`/students/${student.id}`} > Edit</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <IconButton disabled={this.checkDisabled()} onClick={() => this.props.deleteCampus(this.props.campus)} tooltip='Delete Student'>
                    <DeleteButton />
                </IconButton>
                <NewStudentToCampusFormContainer />
            </div>
        )
    }
}

function mapStateToProps(storeState) {
    return {
        campus: storeState.currentCampus,
        students: storeState.currentStudents
    }
}
function mapDispactToProps(dispatch, ownProps) {
    return {
        loadCampus: (id) => {
            dispatch(fetchOneCampus(id))
        },
        loadStudents: (id) => {
            dispatch(fetchCurrentStudents(id))
        },
        deleteCampus: (campus) => {
            dispatch(deleteCampusThunk(campus, ownProps.history))
        },
        deleteStudent: (student) => {
            dispatch(deleteSTUDENT(student))
        },
    };
}


const singleCampusContainer = connect(mapStateToProps, mapDispactToProps)(SingleCampus);

export default singleCampusContainer;