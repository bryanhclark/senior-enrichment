import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCampuses } from '../reducers/campus'
import CampusList from './CampusList'


class StateFulCampusList extends Component {
    componentDidMount() {
        this.props.loadCampuses();
    }

    render() {
        return (
            <CampusList campuses={this.props.campuses} />
        )
    }
}



function mapStateToProps(storeState) {
    return {
        campuses: storeState.campuses
    }
}
function mapDispactToProps(dispatch) {
    return {
        loadCampuses: () => {
            dispatch(fetchCampuses())
        }
    };
}

const StatefulCampusListContainer = connect(mapStateToProps, mapDispactToProps)(StateFulCampusList);

export default StatefulCampusListContainer;