import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Logo from '../logo.svg';

const NavBar = () => {
    return(
        <div>
        <AppBar position="fixed" elevation='8'>
            <Toolbar>
            <img src={Logo} width="70" />
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default NavBar;