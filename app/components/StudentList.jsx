import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import StudentFormContainer from './StudentFormContainer'
import EditStudentFormContainer from './EditStudentFormContainer'
import DeleteButton from 'material-ui/svg-icons/action/delete'
import IconButton from 'material-ui/IconButton';





const StudentList = (props) => {
    return (
        <div className="studentListMain">
            <div id='studentList'>
                <h1>Students:</h1>

                <div className="singleStudentContainer">
                    {
                        props.students.map(student =>
                            (
                                <div className='singleStudent' key={student.id}>
                                    <NavLink to={`/students/${student.id}`}> {student.fullName}</NavLink> <br />
                                    <NavLink to={`/campus/${student.campusId}`} >{student.campus.name} </NavLink><br />
                                    {student.email}
                                    <div className="editDeleteButtonContainer" >
                                        <EditStudentFormContainer student={student} />
                                        <IconButton onClick={() => props.deleteStudent(student)} tooltip='Delete Student'>
                                            <DeleteButton />
                                        </IconButton>
                                    </div>
                                </div>
                            ))
                    }
                </div>

            </div>
            <div className="newStudentButtonContainer">
                <StudentFormContainer />
            </div>
        </div>
    )
}

export default StudentList;




