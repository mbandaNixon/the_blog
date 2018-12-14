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

        return (
            <div>
                <Paper>
                    <Tabs
                        value={0}
                        indicatorColor="primary"
                        textColor="primary"
                        centered>
                        {this.props.muscles.map( (groupe) => 
                        <Tab label={groupe} />
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