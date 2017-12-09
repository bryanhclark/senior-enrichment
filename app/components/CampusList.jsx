import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import CampusFormContainer from './CampusFormContainer'




const CampusList = (props) => {
    return (
        <div id='campusList'>
            <h1>CAMPUSES:</h1>
            <div id="campusContainer">
                {
                    props.campuses.map(campus =>
                        (
                            <div className='campus' key={campus.id} >
                                <h2>{campus.name}</h2>
                                <NavLink to={`/campus/${campus.id}`} key={campus.id}>
                                    <img src={campus.imageUrl} />
                                </NavLink>

                            </div>

                        ))
                }
            </div>
            <CampusFormContainer />
        </div>
    )
}

export default CampusList