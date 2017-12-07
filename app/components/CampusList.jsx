import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'



const CampusList = (props) => {
    return (
        <div>
            <h1>CAMPUSES:</h1>
            <div>
                {
                    props.campuses.map(campus =>
                        (

                            <div key={campus.id} >
                                <NavLink to={`/campus/${campus.id}`} key={campus.id}>
                                    <img src={campus.imageUrl} />
                                </NavLink>
                            </div>

                        ))
                }
            </div>
        </div>
    )
}

export default CampusList