import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


class header extends Component {


    render() {

        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                       
                     <Typography variant="headline" color="inherit" >
                            Maboso ya Elingi
                    </Typography>
                     </Toolbar>
                </AppBar> </div>
        )
    }
}

export default header;