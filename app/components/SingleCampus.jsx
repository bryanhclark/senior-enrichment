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
import Edit from 'material-ui/svg-icons/editor/mode-edit'
import EditCampusFormContainer from './EditCampusFormContainer'
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';


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
                <div className='singleCampusHeader'>
                    <div className='singleSchoolName'>
                        <h1>{this.props.campus.name}</h1>
                        <p>{this.props.campus.description}</p>
                    </div>
                    <div className="singleCampusButtons">
                        <NewStudentToCampusFormContainer />
                        <IconButton disabled={this.checkDisabled()} onClick={() => this.props.deleteCampus(this.props.campus)} tooltip='Delete Campus'>
                            <DeleteButton />
                        </IconButton>
                        <EditCampusFormContainer />
                    </div>
                </div>
                <div className='singleCampusStudentList'>
                    <h2>Students:</h2>
                    {
                        <Table style={{ opacity: 0.5 }}>
                            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                                <TableRow>
                                    <TableHeaderColumn style={{ width: 5 }}>ID</TableHeaderColumn>
                                    <TableHeaderColumn style={{ width: 140 }}>Name</TableHeaderColumn>
                                    <TableHeaderColumn style={{ width: 100 }}>Campus</TableHeaderColumn>
                                    <TableHeaderColumn style={{ width: 5 }} >GPA</TableHeaderColumn>
                                    <TableHeaderColumn style={{ width: 150 }}>Email</TableHeaderColumn>
                                    <TableHeaderColumn style={{ width: 5 }}>Edit</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false}>
                                {this.props.students.map((student) => (
                                    <TableRow key={student.id}>
                                        <TableRowColumn style={{ width: 5 }}>{student.id}</TableRowColumn>
                                        <TableRowColumn style={{ width: 140 }}>{student.fullName}</TableRowColumn>
                                        <TableRowColumn style={{ width: 100 }}>{student.campus.name}</TableRowColumn>
                                        <TableRowColumn style={{ width: 5 }}>{student.gpa}</TableRowColumn>
                                        <TableRowColumn style={{ width: 150 }}>{student.email}</TableRowColumn>
                                        <TableRowColumn style={{ width: 5 }}>
                                            <IconButton onClick={this.handleOpen}>
                                                <NavLink to={`/students/${student.id}`} > <Edit /></NavLink>
                                            </IconButton>
                                        </TableRowColumn>
                                    </TableRow>
                                ))}
                            </TableBody>

                        </Table>
                    }

                </div>

            </div>

        )
    }
}

function mapStateToProps(storeState) {
    return {
        campus: storeState.singleCampus,
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