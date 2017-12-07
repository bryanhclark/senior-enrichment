/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import studentReducer from './student'
import campusReducer from './campus'


const rootReducer = combineReducers({
  students: studentReducer,
  campuses: campusReducer
})

export default rootReducer
