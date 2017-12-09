import axios from 'axios'

//action type
const GOT_STUDENTS = 'GOT_STUDENTS'
const NEW_STUDENT = 'NEW_STUDENT'
const EDIT_STUDENT = 'EDIT_STUDENT'
const DELETE_STUDENT = 'DELETE_STUDENT'


//action creator
const gotStudents = (students) => {
    return {
        type: GOT_STUDENTS,
        students
    }
}

export const createStudent = (newStudent) => {
    return {
        type: NEW_STUDENT,
        newStudent
    }
}


export const editSTUDENTS = (edittedStudent) => {
    return {
        type: EDIT_STUDENT,
        edittedStudent
    }
}

export const deleteStudents = (deletedStudent) => {
    return {
        type: DELETE_STUDENT,
        deletedStudent
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

export const postStudent = (studentObj, history) => {
    return function thunk(dispatch) {
        axios.post('/api/students/', studentObj)
            .then(res => {
                dispatch(createStudent(res.data))
            })
            .catch(console.error)
    }
}

export const editStudent = (studentObj, history) => {
    return function thunk(dispatch) {
        axios.put('/api/students/' + studentObj.id, studentObj)
            .then(res => {
                dispatch(editSTUDENTS(res.data))
            })
            .catch(console.error)
    }
}

export const deleteSTUDENT = (student) => {
    return function thunk(dispatch) {
        axios.delete('/api/students/' + student.id)
            .then((res) => {
                console.log('in response')
                dispatch(deleteStudents(student))
            })
            .catch(console.error);
    }
}


//sub-reducer
export const studentReducer = (state = [], action) => {
    switch (action.type) {
        case GOT_STUDENTS:
            return action.students
        case NEW_STUDENT:
            return [...state, action.newStudent]
        case EDIT_STUDENT:
            const updatedStudents = state.map((student) => {
                if (student.id === action.edittedStudent.id) {
                    return action.edittedStudent
                }
                return student
            })
            return updatedStudents
        case DELETE_STUDENT:
            console.log('in reducer', action.deletedStudent)
            const deletedThenUpdatedStudents = state.filter(student => {
                if (student.id !== action.deletedStudent.id) {
                    return student
                }
            })
            return deletedThenUpdatedStudents
        default:
            return state
    }
}




//export sub-reducer

export default studentReducer