import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchOneCampus } from '../reducers/singleCampus'
import { fetchCurrentStudents } from '../reducers/currentStudents'


class SingleCampus extends Component {
    componentDidMount() {
        this.props.loadCampus(this.props.match.params.campusId)
        this.props.loadStudents(this.props.match.params.campusId)
    }


    render() {
        return (
            <div className='singleSchoolContainer'>
                <div className='singleSchoolName'>
                    <h1>{this.props.campus.name}</h1>
                </div>
                <div className='currentStudentList'>
                    <ul>
                        {
                            this.props.students.map(student => (
                                <li key={student.id}>
                                    {student.fullName}
                                </li>
                            ))
                        }
                    </ul>
                </div>
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
function mapDispactToProps(dispatch) {
    return {
        loadCampus: (id) => {
            dispatch(fetchOneCampus(id))
        },
        loadStudents: (id) => {
            dispatch(fetchCurrentStudents(id))
        }
    };
}


const singleCampusContainer = connect(mapStateToProps, mapDispactToProps)(SingleCampus);

export default singleCampusContainer;