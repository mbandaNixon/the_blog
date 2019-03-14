import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class footer extends Component {
//   constructor(props){
//       super(props);

//   }

    render() {

        const muscles = this.props.muscles;
        const category = this.props.category;
        const index = category ? muscles.findIndex(groupe => groupe === category) + 1 : 0;

        const onSelect = this.props.onSelect;
        const indexonSelect = (e, index) => {
            onSelect(index === 0 ? '' : muscles[index - 1])
        }


        return (
            <div>
                <Paper>
                   
                    <Tabs
                        value={index}
                        onChange={indexonSelect}
                        indicatorColor="primary"
                        textColor="primary"
                        centered >

                        <Tab label="All" />

                        {muscles.map( (groupe) => 
                        <Tab label={groupe} key={groupe} />
                        )}
                      
                    </Tabs>
                </Paper> </div>
        )
    }
}

footer.propTypes = {
    muscles: PropTypes.object.isRequired
}

export default footer;