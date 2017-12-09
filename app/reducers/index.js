/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import students from './student'
import campuses from './campus'
import singleCampusReduce from './singleCampus'
import currentStudentsReducer from './currentStudents'
import newCampusReducer from './campusInputValue'


const rootReducer = combineReducers({
  students,
  currentStudents: currentStudentsReducer,
  campuses,
  currentCampus: singleCampusReduce
})

export default rootReducer
