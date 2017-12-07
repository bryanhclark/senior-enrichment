/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import studentReducer from './student'
import campusReducer from './campus'
import singleCampusReduce from './singleCampus'
import currentStudentsReducer from './currentStudents'


const rootReducer = combineReducers({
  students: studentReducer,
  currentStudents: currentStudentsReducer,
  campuses: campusReducer,
  currentCampus: singleCampusReduce
})

export default rootReducer
