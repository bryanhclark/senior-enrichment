import axios from 'axios'
import { createStudent } from './student'


const GOT_CURRENT_STUDENTS = 'GOT_CURRENT_STUDENTS'
const ADD_CURRENT_STUDENT = 'ADD_CURRENT_STUDENT'



export const gotCurrentStudents = (students) => {
    return {
        type: GOT_CURRENT_STUDENTS,
        students
    }
}

export const addCurrentStudent = (addedStudent) => {
    return {
        type: ADD_CURRENT_STUDENT,
        addedStudent
    }
}

export const addCurrentStudentTHUNK = (studentObj, history) => {
    return function thunk(dispatch) {
        axios.post('/api/students/', studentObj)
            .then(res => {
                dispatch(addCurrentStudent(res.data))
                dispatch(createStudent(res.data))
            })
            .catch(console.error)
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
        case ADD_CURRENT_STUDENT:
            return [...state, action.addedStudent]
        default:
            return state
    }
}

export default currentStudentsReducer