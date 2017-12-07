import axios from 'axios'


const GOT_CURRENT_STUDENTS = 'GOT_CURRENT_STUDENTS'



export const gotCurrentStudents = (students) => {
    return {
        type: GOT_CURRENT_STUDENTS,
        students
    }
}


export const fetchCurrentStudents = (id) => {
    return function thunk(dispatch) {
        axios.get('/api/campus/' + id + '/students')
            .then(res => {
                dispatch(gotCurrentStudents(res.data))
            })
            .catch(console.error)
    }
}

const currentStudentsReducer = (state = [], action) => {
    switch (action.type) {
        case GOT_CURRENT_STUDENTS:
            return action.students
        default:
            return state
    }
}

export default currentStudentsReducer