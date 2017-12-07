import axios from 'axios'

//action type
const GOT_CAMPUSES = 'GOT_CAMPUSES'


//action creator

export const gotCampuses = (campuses) => {
    return {
        type: GOT_CAMPUSES,
        campuses
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



//sub-reducer
const campusReducer = (state = [], action) => {
    switch (action.type) {
        case GOT_CAMPUSES:
            return action.campuses
        default:
            return state
    }
}




//export sub-reducer

export default campusReducer;