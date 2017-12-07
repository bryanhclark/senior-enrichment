import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchStudents } from '../reducers/student'
import StudentList from './StudentList'


class StatefulStudentList extends Component {
    componentDidMount() {
        this.props.loadStudents();
    }

    render() {
        return (
            <StudentList students={this.props.students} />
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

const StatefulStudentListContainer = connect(mapStateToProps, mapDispactToProps)(StatefulStudentList);

export default StatefulStudentListContainer;