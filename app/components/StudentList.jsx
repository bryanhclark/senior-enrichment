import React, { Component } from 'react';
import { connect } from 'react-redux'



const StudentList = (props) => {
    return (
        <div>
            <h1>Students:</h1>

            <ul>
                {
                    props.students.map(student =>
                        (
                            <li key={student.id}>
                                {student.fullName}
                            </li>
                        ))
                }
            </ul>

        </div>
    )
}

export default StudentList;




