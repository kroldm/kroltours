import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';


const TopBar = ({ children }) =>
    <AppBar position="static">
        <Toolbar>
            {children}
        </Toolbar>
    </AppBar>;

export default TopBar;
