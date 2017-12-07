import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCampuses } from '../reducers/campus'


class CampusList extends Component {
    componentDidMount() {
        this.props.loadCampuses();
    }


    render() {
        const myCampuses = this.props.campuses
        // console.log(campuses)
        return (
            <div>
                <h1>CAMPUSES:</h1>
                <div>
                    {
                        myCampuses.map(campus =>
                            (
                                <div key={campus.id} >
                                    <img src={campus.imageUrl} />
                                </div>
                            ))
                    }
                </div>
            </div>
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


const CampusListContainer = connect(mapStateToProps, mapDispactToProps)(CampusList);


export default CampusListContainer;


