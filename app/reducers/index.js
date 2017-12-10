/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import students from './student'
import campuses from './campus'
import singleCampus from './singleCampus'
import currentStudents from './currentStudents'
import currentStudent from './singleStudent'


const rootReducer = combineReducers({
  students,
  currentStudents,
  campuses,
  singleCampus,
  currentStudent
})

export default rootReducer
