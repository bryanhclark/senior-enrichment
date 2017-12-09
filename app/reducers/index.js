/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import students from './student'
import campuses from './campus'
import singleCampusReduce from './singleCampus'
import currentStudents from './currentStudents'
import newCampusReducer from './campusInputValue'
import currentStudent from './singleStudent'


const rootReducer = combineReducers({
  students,
  currentStudents,
  campuses,
  currentCampus: singleCampusReduce,
  currentStudent
})

export default rootReducer
