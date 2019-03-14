import React, { Component, Fragment } from 'react'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Dialog, Button } from '@material-ui/core'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Form from '../components/container/form'




export default (class DialogCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      excercise: {
        title: '',
        description: '',
        muscles: ''
      }
    }
  }



  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }



  render() {
    const { open } = this.state;
    const {muscles, onCreate} = this.props


    return (
      <Fragment>

        <Fab color="secondary" aria-label="Add" onClick={this.handleToggle}>
          <AddIcon />
        </Fab>

        <Dialog
          open={open}
          onClose={this.handleToggle}>

          <DialogTitle id="form-dialog-title">Create new Excersise </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Fill Our form below
            </DialogContentText>

          <Form muscles_2={muscles} onSubmit={onCreate}/>

          </DialogContent>

          <DialogActions>

          
          </DialogActions>
        </Dialog>
      </Fragment>
    )
  }
})


