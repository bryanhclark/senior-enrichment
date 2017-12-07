import axios from 'axios'


const GET_ONE_CAMPUS = 'GET_ONE_CAMPUS'



export const getOneCampus = (campus) => {
    return {
        type: GET_ONE_CAMPUS,
        campus
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


const singleCampusReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ONE_CAMPUS:
            return action.campus
        default:
            return state
    }
}


export default singleCampusReducer;