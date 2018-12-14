import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleCollapse } from '../actions/sidebar';
import SideBarMain from '../components/sidebar/main'
import {ShouldRender} from '../components/basics/ShouldRender'


class dashboard extends Component {



  render() {


    return (
      <div>
        <div>
          <div>
            <SideBarMain />
            <div className="page-container">
              
              {/* main container here  */}
               <div>
                <p> kenya one </p>

                </div>
              <footer className="bdT ta-c p-30 lh-0 fsz-sm c-grey-600">
                <span>Copyright © {new Date().getFullYear()}</span>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ toggleCollapse,  }, dispatch)
}


function mapStateToProps(state) {
  return {
    sidebar: state.sidebar,
  };
}


export default connect(mapStateToProps, mapDispatchToProps) (dashboard);
