import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import CampusList from './CampusList'
import StatefulCampusList from './StatefulCampusList'
import StatefulStudentList from './StatefulStudentList'
import SingleCampus from './SingleCampus'
import StudentList from './StudentList'
import singleStudent from './SingleStudent'
import Navbar from './Navbar'


const style = {
    backgroundColor: "#f44242"
}
export default class Home extends Component {
    render() {
        return (
            <Router>
                <div id="home-main" style={style}>
                    <Navbar />
                    <Switch>
                        <Route exact path='/campus' component={StatefulCampusList} />
                        <Route path='/campus/:campusId' component={SingleCampus} />
                        <Route exact path='/students' component={StatefulStudentList} />
                        <Route path='/students/:studentId' component={singleStudent} />
                        <Route component={StatefulCampusList} />
                    </Switch>
                </div>
            </Router>
        )
    }
}