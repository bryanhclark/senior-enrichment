import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import CampusList from './CampusList'
import StudentList from './StudentList'
import Navbar from './Navbar'



export default class Home extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Switch>
                        <Route path='/campus' component={CampusList} />
                        <Route path='/students' component={StudentList} />
                        <Route component={CampusList} />
                    </Switch>
                </div>
            </Router>
        )
    }
}