import axios from 'axios'

//action type
const GOT_CAMPUSES = 'GOT_CAMPUSES'
const NEW_CAMPUS = 'NEW_CAMPUS'
const DELETE_CAMPUS = 'DELETE_CAMPUS'



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

export const deleteCampus = (deletedCampus) => {
    return {
        type: DELETE_CAMPUS,
        deletedCampus
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

export const deleteCampusThunk = (campusObj, history) => {
    return function thunk(dispatch) {
        axios.delete('/api/campus/' + campusObj.id)
            .then(res => {
                dispatch(deleteCampus(res.data))
                history.push('/campus')
            })
            .catch(console.error)
    }
}




//sub-reducer
const campusReducer = (state = [], action) => {
    switch (action.type) {
        case GOT_CAMPUSES:
            return action.campuses
        case NEW_CAMPUS:
            return [...state, action.newCampus]
        case DELETE_CAMPUS:
            const deletedCampusList = state.filter(campus => {
                if (campus.id !== action.deletedCampus.id) {
                    return campus
                }
            })
            return deletedCampusList
        default:
            return state
    }
}




//export sub-reducer

export default campusReducer;