import React, { Component, Fragment } from 'react'
import { Grid, } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import  DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Create'
import Form from './form'

const style = ({

    paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 5,
        height: 400,
        overflowY: 'auto'
    },

});

class Main extends Component {


    render() {

        const { exercises, category, onSelect, exercise, onDelete,
             onEdit, editMode, muscles, onEdit_2 } = this.props;
        const id = exercise.id;
        const title = exercise.title;
        const description = exercise.description;


        return (

            <div>

                <Grid container >
                    <Grid item sm>
                        <Paper style={style.paper}>
                            {exercises.map(([groupe, exercises]) =>
                                !category || category === groupe
                                    ? <Fragment key={groupe}>muscles_2
                                        <Typography
                                            variant='headline'
                                            style={{ textTransform: 'capitalize' }}>
                                            {groupe}
                                        </Typography>

                                        <List component="ul" key={id}>
                                            {exercises.map(({ id, title }) =>

                                                <ListItem button key={id} onClick={() => onSelect(id)}>
                                                    <ListItemText primary={title} />

                                                    <ListItemSecondaryAction>
                                                        <IconButton onClick={() => onEdit(id)}>
                                                            <EditIcon />
                                                        </IconButton>
                                                    
                                                        <IconButton onClick={() => onDelete(id)}>
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </ListItemSecondaryAction>

                                                </ListItem>
                                            )}

                                        </List>
                                    </Fragment> : null
                            )}
                        </Paper>
                    </Grid>
                    <Grid item sm>
                        <Paper style={style.paper}>
                            {editMode ? 
                            <Form muscles_2={muscles} onSubmit={onEdit_2}/> 
                            :
                            <Fragment>
                            <Typography variant='display1'>
                                {title}
                            </Typography>
                            <Typography variant='subheading'
                                style={{ marginTop: 20 }}>
                                {description}
                            </Typography>
                        </Fragment>}
                        </Paper>
                    </Grid>
                </Grid>
            </div>

        )
    }
}

export default Main;