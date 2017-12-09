import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchStudents } from '../reducers/student'
import { fetchCampuses } from '../reducers/campus'
import StudentList from './StudentList'
import { deleteSTUDENT } from '../reducers/student'


class StatefulStudentList extends Component {
    componentDidMount() {
        this.props.loadStudents();
        this.props.loadCampuses();
    }

    render() {
        console.log(this.props);
        return (
            <StudentList students={this.props.students} deleteStudent={this.props.deleteStudent} />
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
        deleteStudent: (student) => {
            dispatch(deleteSTUDENT(student))
        },
        loadStudents: () => {
            dispatch(fetchStudents())
        },
        loadCampuses: () => {
            dispatch(fetchCampuses())
        }
    };
}

const StatefulStudentListContainer = connect(mapStateToProps, mapDispactToProps)(StatefulStudentList);

export default StatefulStudentListContainer;