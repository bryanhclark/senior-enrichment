import axios from 'axios'

//action type
const GOT_CAMPUSES = 'GOT_CAMPUSES'
const NEW_CAMPUS = 'NEW_CAMPUS'



//action creator

export const gotCampuses = (campuses) => {
    return {
        type: GOT_CAMPUSES,
        campuses
    }
}

export const createCampus = (newCampus) => {
    return {
        type: NEW_CAMPUS,
        newCampus
    }
}

//thunk

export const fetchCampuses = () => {
    return function thunk(dispatch) {
        axios.get('/api/campus')
            .then(res => {
                dispatch(gotCampuses(res.data))
            })
            .catch(console.error);
    }
}

export const postCampus = (campusObj, history) => {
    return function thunk(dispatch) {
        axios.post('/api/campus/', campusObj)
            .then(res => {
                dispatch(createCampus(res.data))
            })
            .catch(console.error);
    }
}




//sub-reducer
const campusReducer = (state = [], action) => {
    switch (action.type) {
        case GOT_CAMPUSES:
            return action.campuses
        case NEW_CAMPUS:
            return [...state, action.newCampus]
        default:
            return state
    }
}




//export sub-reducer

export default campusReducer;