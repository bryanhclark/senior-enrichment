import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchOneStudent } from '../reducers/singleStudent'
import { fetchOneCampus } from '../reducers/singleCampus'
import EditSingleStudentFormContainer from './EditSingleStudentFormContainer'

class singleStudent extends Component {
    componentDidMount() {
        this.props.loadStudent(this.props.match.params.studentId)
    }

    render() {
        return (
            <div className='singleStudentContainer'>
                <div className='singleStudentName'>
                    <h1>Name:  {this.props.currentStudent.fullName}</h1>
                    <h1>Campus: {this.props.campus.name}</h1>
                    <h1>GPA:{this.props.currentStudent.gpa}</h1>
                    <h1>Email: {this.props.currentStudent.email}</h1>
                </div>
                <div className='singleStudentEditButton'>
                    <EditSingleStudentFormContainer student={this.props.currentStudent} />
                </div>
            </div>
        )
    }
}





function mapStateToProps(storeState) {
    return {
        currentStudent: storeState.currentStudent,
        campus: storeState.singleCampus
    }
}


function mapDispatchToProps(dispatch, ownProps) {
    return {
        loadStudent: (id) => {
            dispatch(fetchOneStudent(id))
        }
    }
}


const singleStudentContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(singleStudent))

export default singleStudentContainer