import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import './index.css';

const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar className="Tool-bar">
                    <Typography variant="title" color="inherit">
                        React Demo
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;