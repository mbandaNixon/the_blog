import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Dialog from '../../Daialog/create'


class header extends Component {


    render() {

        const {muscles, onExerciseCreate} = this.props;

        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                       
                     <Typography variant="headline" color="inherit" style={{flex: 1}}>
                            Maboso ya Elingi
                    </Typography>

                    <Typography>
                        <Dialog muscles={muscles} onCreate={onExerciseCreate} />

                    </Typography>
                     </Toolbar>
                </AppBar> </div>
        )
    }
}

export default header;