import React from 'react';
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import { NavLink } from 'react-router-dom'
import Gavel from 'material-ui/svg-icons/action/gavel'

const style = {
    margin: 9,
};

const rightButtons = (
    <div>
        <NavLink to="/campus"><RaisedButton label="Campuses" style={style} /></NavLink>
        <NavLink to="/students"><RaisedButton label="Students" style={style} /></NavLink>
    </div>
);

const Navbar = () => {
    return (
        <AppBar
            iconElementLeft={<Gavel style={{ color: 'black', margin: 9 }} />}
            style={{ margin: 'auto', color: 'white' }}
            title="WELCOME TO THE THUNDERDOME"
            iconElementRight={rightButtons} />
    );
}

export default Navbar;