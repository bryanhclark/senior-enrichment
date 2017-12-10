import axios from 'axios'

const GET_ONE_STUDENT = 'GET_ONE_STUDENT'
const EDIT_ONE_STUDENT = 'EDIT_ONE_STUDENT'


export const getOneStudent = (currentStudent) => {
    return {
        type: GET_ONE_STUDENT,
        currentStudent
    }
}

export const editOneActionCreator = (edittedStudent) => {
    return {
        type: EDIT_ONE_STUDENT,
        edittedStudent
    }
}



export const fetchOneStudent = (id) => {
    return function thunk(dispatch) {
        axios.get('/api/students/' + id)
            .then(res => {
                console.log(res.data)
                dispatch(getOneStudent(res.data))
            })
            .catch(console.error)
    }
}

export const editOneStudent = (studentObj, history) => {
    console.log(studentObj)
    return function thunk(dispatch) {
        axios.put('/api/students/' + studentObj.id, studentObj)
            .then(res => {
                dispatch(editOneActionCreator(res.data))
            })
            .catch(console.error)
    }
}



const singleStudentReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ONE_STUDENT:
            return action.currentStudent
        case EDIT_ONE_STUDENT:
            return action.edittedStudent
        default:
            return state
    }
}


export default singleStudentReducer;