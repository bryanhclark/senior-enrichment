import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import CampusFormContainer from './CampusFormContainer'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';


const styles = {
    width: '250px',
    height: '250px',
    margin: '15px',
    borderRadius: '10'
}

const CampusList = (props) => {
    return (
        <div id='campusList'>
            <div className='campusListHeader'>
                <h1>CAMPUSES:</h1>
                <div className='addCampusButtonDiv'>
                    <CampusFormContainer />
                </div>
            </div>
            <div id="campusContainer">
                {
                    props.campuses.map(campus =>
                        (
                            <NavLink to={`/campus/${campus.id}`}>
                                <Card style={styles} key={campus.id} >
                                    <CardMedia zDepth={5} style={{ height: '80%', width: '80%', margin: 'auto', marginTop: '10px' }} >
                                        <img src={campus.imageUrl} alt="" />
                                    </CardMedia>
                                    <CardTitle title={campus.name} style={{ textAlign: 'center', textDecoration: 'none' }} />
                                </Card>
                            </NavLink>
                        ))
                }
            </div>

        </div>
    )
}

export default CampusList