import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleCollapse, toggleAppSideBaeMenu } from '../../actions/sidebar';

class sidebarMain extends Component {

    render() {

        return (
            <div className='sidebar'>
            <div className="sidebar-inner">
              <div className="sidebar-logo">
                <div className="peers ai-c fxw-nw">
                  <div className="peer peer-greed">
                    <a to='/dashboard' className="sidebar-link td-n">
                      <div className='peers ai-c fxw-nw'>
                        <div className="peer">
                          <div className="logo">
                            <img className='-logo' src="/images/images.png" alt="" />
                          </div>
                        </div>
                        <div className="peer peer-greed">
                          <h5 className="lh-1 mB-0 logo-text">Test Toggle</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="peer">
                    <div className="mobile-toggle sidebar-toggle">
                      <span onClick={() => this.props.toggleCollapse()} className="td-n cursor-pointer">
                        <i className="ti-arrow-circle-left"> nnnnnnnnnnn </i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ toggleCollapse, toggleAppSideBaeMenu }, dispatch)
  }


  function mapStateToProps(state) {
    return {
      sidebar: state.sidebar,
    };
  }

  
export default connect(mapStateToProps, mapDispatchToProps)(sidebarMain);