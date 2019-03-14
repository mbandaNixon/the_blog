import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Container from '../components/container/index'
import { muscles, exercises } from '../components/str/data'




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
    constructor(props) {
        super(props);
        this.state = {
            exercises: exercises,
            exercise: {},
            editMode: false
        }
    }

    getExerciseByMuscle = () => {
        //delete but keep the category title 
        const initExcercise = muscles.reduce((exercises, category) =>( {
           ...exercises,
            [category]: []
      }), { });


return Object.entries(
    this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = [...exercises[muscles], exercise]


        return exercises
    }, initExcercise)
)

    }

categoryselect = (category) => {
    this.setState({
        category
    })
}

handleExerciSeselect = (id) => {
    this.setState(({ exercises }) => ({
        exercise: exercises.find(ex => ex.id === id)
    }))
}

handleExerciCreate = (exercise) => {
    this.setState(({ exercises }) => ({
        exercises: [
            ...exercises, exercise
        ]
    }))
}

handleExerciDelete = (id) => {
    this.setState(({ exercises }) => ({
        exercises: exercises.filter(ex => ex.id !== id)

    }))
}

handleExerciceEdit = (id) => {
    this.setState(({exercises}) => ({
        exercise: exercises(ex => ex.id === id),
        editMode: true
        }));
}

    

    handleExerciceEdit_2 = (exer) => 
        this.setState(({exercises}) => ({
           exercises: [ ...exercises.filter(ex => ex.id !== exer.id),
            exer
            ] 
    }))
    
    
render() {
    //   console.log(this.getExerciseByMuscle());

    const exercises = this.getExerciseByMuscle();
    const { category, exercise, editMode } = this.state;

    return (

        <div className={styles.root}>

            <Header
                muscles={muscles}
                onExerciseCreate={this.handleExerciCreate} />

            {/* main body */}
            <Container
                exercises={exercises}
                category={category}
                exercise={exercise}
                onSelect={this.handleExerciSeselect}
                onDelete={this.handleExerciDelete}
                onEdit={this.handleExerciceEdit}
                editMode={editMode}
                muscles={muscles}
                onEdit_2={this.handleExerciceEdit_2}
                 />

            {/* footer */}
            <Footer
                muscles={muscles}
                category={category}
                onSelect={this.categoryselect} />
        </div>
    );
}
}


ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
