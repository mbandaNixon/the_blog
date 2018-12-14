import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Container from '../components/container/index'
import {muscles, excersises} from '../components/str/data'




const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class ButtonAppBar extends Component {
  constructor(props){
      super(props);
   this.state = {
    excersises: excersises
   }
  }

  getExerciseByMuscle = () => {
     return Object.entries(
        this.state.excersises.reduce((excersises, excersise) => {
            const { muscles } = excersise;
           
            excersises[muscles] = excersises[muscles] ?
            [...excersises[muscles], excersise] : excersise
   
            return excersises;
        }, {})
     )
     
  }

    render() {
       const exercises = this.getExerciseByMuscle();

        return (
            
            <div className={styles.root}>

                <Header />
                <Container exercises={exercises} />
                <Footer muscles={muscles} />
            </div>
        );
    }
}


ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
