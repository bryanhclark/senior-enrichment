import axios from 'axios'

//action type
const GOT_STUDENTS = 'GOT_STUDENTS'


//action creator
const gotStudents = (students) => {
    return {
        type: GOT_STUDENTS,
        students
    }
}
//thunk

export const fetchStudents = () => {
    return function thunk(dispatch) {
        return axios.get('/api/students')
            .then(res => {
                dispatch(gotStudents(res.data))
            })
            .catch(console.error);
    }
}



//sub-reducer
export const studentReducer = (state = [], action) => {
    switch (action.type) {
        case GOT_STUDENTS:
            return action.students
        default:
            return state
    }
}




//export sub-reducer

export default studentReducer