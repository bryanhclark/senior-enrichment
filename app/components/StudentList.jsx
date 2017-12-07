import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'



const StudentList = (props) => {
    console.log(props.students)
    return (
        <div>
            <h1>Students:</h1>

            <ul>
                {
                    props.students.map(student =>
                        (
                            <li key={student.id}>
                                {student.fullName} - <NavLink to={`/campus/${student.campusId}`} >{student.campus.name}</NavLink>
                            </li>
                        ))
                }
            </ul>

        </div>
    )
}

export default StudentList;




