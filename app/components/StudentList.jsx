import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import StudentFormContainer from './StudentFormContainer'
import EditStudentFormContainer from './EditStudentFormContainer'
import DeleteButton from 'material-ui/svg-icons/action/delete'
import IconButton from 'material-ui/IconButton';



const StudentList = (props) => {

    return (
        <div id='studentList'>
            <h1>Students:</h1>

            <ul>
                {
                    props.students.map(student =>
                        (
                            <li key={student.id}>
                                {student.fullName} - <NavLink to={`/campus/${student.campusId}`} >{student.campus.name}</NavLink> <EditStudentFormContainer student={student} />
                                <IconButton onClick={() => props.deleteStudent(student)}>
                                    <DeleteButton />
                                </IconButton>
                            </li>
                        ))
                }
            </ul>
            <StudentFormContainer />
        </div>
    )
}

export default StudentList;




