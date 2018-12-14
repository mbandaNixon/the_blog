import React, { Component , Fragment} from 'react'
import { Grid, } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const style = theme => ({

    paper: {
        padding: 20,
        marginTop: 10
    },

});

class Main extends Component {

    render() {

        return (

            <div>

                <Grid container >
                    <Grid item sm>
                        <Paper style={style.paper}>
                            {this.props.exercises.map(([groupe, exercises]) =>
                                <Fragment>
                                    <Typography
                                        variant='headline'
                                        style={{ textTransform: 'capitalize' }}>
                                        {groupe}
                                    </Typography>

                                    <List component="ul">
                                        {this.props.exercises.map(({ title }) =>

                                            <ListItem button>
                                                <ListItemText primary={title} />
                                            </ListItem>
                                        )}

                                    </List>
                                </Fragment>
                            )}
                        </Paper>
                    </Grid>
                    <Grid item sm>
                        <Paper style={style.paper}> Right Data</Paper>
                    </Grid>
                </Grid>
            </div>

        )
    }
}

export default Main;