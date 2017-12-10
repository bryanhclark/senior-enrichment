import axios from 'axios'


const GET_ONE_CAMPUS = 'GET_ONE_CAMPUS'
const EDIT_ONE_CAMPUS = 'EDIT_ONE_CAMPUS'



export const getOneCampus = (campus) => {
    return {
        type: GET_ONE_CAMPUS,
        campus
    }
}

export const editOneCampusActionCreator = (edittedCampus) => {
    return {
        type: EDIT_ONE_CAMPUS,
        edittedCampus
    }
}


export const fetchOneCampus = (id) => {
    return function thunk(dispatch) {
        axios.get('/api/campus/' + id)
            .then(res => {
                dispatch(getOneCampus(res.data))
            })
            .catch(console.error)
    }
}

export const editOneCampus = (campus, history) => {
    return function thunk(dispatch) {
        axios.put('/api/campus/' + campus.id, campus)
            .then(res => {
                dispatch(editOneCampusActionCreator(res.data))
            })
            .catch(console.error)
    }
}

const singleCampusReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ONE_CAMPUS:
            return action.campus
        case EDIT_ONE_CAMPUS:
            return action.edittedCampus
        default:
            return state
    }
}


export default singleCampusReducer;