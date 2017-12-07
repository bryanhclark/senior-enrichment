import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchStudents } from '../reducers/student'


class StudentList extends Component {
    componentDidMount() {
        this.props.loadStudents();
    }
    render() {
        return (
            <div>
                <h1>STUDENTS:</h1>
                <ul>
                    {this.props.students.map(student => (
                        <li key={student.id}>{student.firstName}</li>
                    ))}
                </ul>
            </div>
        )
    }
}



function mapStateToProps(storeState) {
    return {
        students: storeState.students
    }
}


function mapDispactToProps(dispatch) {
    return {
        loadStudents: () => {
            dispatch(fetchStudents())
        }
    };
}


const StudentListContainer = connect(mapStateToProps, mapDispactToProps)(StudentList);


export default StudentListContainer;


