import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import StudentFormContainer from './StudentFormContainer'
import EditStudentFormContainer from './EditStudentFormContainer'
import DeleteButton from 'material-ui/svg-icons/action/delete'
import IconButton from 'material-ui/IconButton';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';





const StudentList = (props) => {
    return (
        <div className="studentListMain">
            <div id='studentList'>
                <div className='studentListHeader'>
                    <h1>Students:</h1>
                    <div className="newStudentButtonContainer">
                        <StudentFormContainer />
                    </div>
                </div>
                <div className="singleStudentContainer">

                    <div>
                        <Table style={{ opacity: 0.5 }}>
                            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                                <TableRow>
                                    <TableHeaderColumn style={{ width: 5 }}>ID</TableHeaderColumn>
                                    <TableHeaderColumn style={{ width: 140 }}>Name</TableHeaderColumn>
                                    <TableHeaderColumn style={{ width: 100 }}>Campus</TableHeaderColumn>
                                    <TableHeaderColumn style={{ width: 5 }} >GPA</TableHeaderColumn>
                                    <TableHeaderColumn style={{ width: 150 }}>Email</TableHeaderColumn>
                                    <TableHeaderColumn style={{ width: 5 }}>Edit</TableHeaderColumn>
                                    <TableHeaderColumn style={{ width: 5 }}>Delete</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false}>
                                {props.students.map((student) => (
                                    <TableRow key={student.id}>
                                        <TableRowColumn style={{ width: 5 }}>{student.id}</TableRowColumn>
                                        <TableRowColumn style={{ width: 140 }}>{student.fullName}</TableRowColumn>
                                        <TableRowColumn style={{ width: 100 }}>{student.campus.name}</TableRowColumn>
                                        <TableRowColumn style={{ width: 5 }}>{student.gpa}</TableRowColumn>
                                        <TableRowColumn style={{ width: 150 }}>{student.email}</TableRowColumn>
                                        <TableRowColumn style={{ width: 5 }}>
                                            <EditStudentFormContainer student={student} />
                                        </TableRowColumn>
                                        <TableRowColumn style={{ width: 5 }}>
                                            <IconButton onClick={() => props.deleteStudent(student)} tooltip='Delete Student'>
                                                <DeleteButton />
                                            </IconButton>
                                        </TableRowColumn>
                                    </TableRow>
                                ))}
                            </TableBody>

                        </Table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default StudentList;




