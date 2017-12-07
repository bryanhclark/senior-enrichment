import React from 'react';
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem'
import Popover from 'material-ui/Popover';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { NavLink } from 'react-router-dom'



const Navbar = () => {
    return (
        <AppBar title="WELCOME TO THE THUNDERDOME" iconElementLeft={
            <IconMenu
                iconButtonElement={<IconButton><ContentFilter /></IconButton>} >
                <NavLink to="/campus"> <MenuItem primaryText="Universities" /></NavLink>
                <NavLink to="/students"> <MenuItem primaryText="Students" /></NavLink>
            </IconMenu>
        } />
    );
}








export default Navbar;