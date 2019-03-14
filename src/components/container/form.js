import React ,{Component, Fragment} from 'react'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select';
import { Dialog, Button } from '@material-ui/core'


const style = theme => ({
    FormControl: {
      width: 500
    }
  });

export default withStyles(style)(class form extends Component {
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


      handleChange = (name) => ({ target: { value } }) => 
        this.setState({
          [name]: value
        })
      
    
      handlesubmit = () => {
        const { excercise } = this.state;
    
        this.props.onSubmit({
          ...excercise,
          id: excercise.title.toLocaleLowerCase().replace(/ /g, '-')
        });
    
        //clear form after submiting
        this.setState({
          open: false,
          excercise: {
            title: '',
            description: '',
            muscles: ''
          }
        })
      
      }


    render() {

        const { classes } = this.props;
        const { title, description, muscles } = this.state.excercise;
        const {category, muscles_2} = this.props;

        return(
            <form>

              <TextField
                label="Title"
                value={title}   

                onChange={this.handleChange('title')}
                margin="normal"
                className={classes.FormControl}
              />

              <br />
              <TextField
                multiline
                rows="3"
                label="Description"
                value={description}
                onChange={this.handleChange('description')}
                margin="normal"
                className={classes.FormControl}
              />

              <br />
              <FormControl>
                <InputLabel htmlFor="muscles"> Muscles </InputLabel>
                <Select
                  value={muscles_2}
                  onChange={this.handleChange('muscles')} >

                  <MenuItem value="">
                    <em> None </em>
                  </MenuItem>

                  {category.map(category =>
                    <MenuItem value={category}>
                      {category}
                    </MenuItem>
                  )}



                </Select>
              </FormControl>

              <br />
              <Button
              color="primary"
              variant="outlined"
              className={classes.FormControl}
              onClick={this.handlesubmit}
            >
              Submit
            </Button>

            </form>
        )
    }
})