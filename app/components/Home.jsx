import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import CampusList from './CampusList'
import StatefulCampusList from './StatefulCampusList'
import StatefulStudentList from './StatefulStudentList'
import SingleCampus from './SingleCampus'
import StudentList from './StudentList'
import Navbar from './Navbar'



export default class Home extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path='/campus' component={StatefulCampusList} />
                        <Route path='/campus/:campusId' component={SingleCampus} />
                        <Route path='/students' component={StatefulStudentList} />
                        <Route component={StatefulCampusList} />
                    </Switch>
                </div>
            </Router>
        )
    }
}