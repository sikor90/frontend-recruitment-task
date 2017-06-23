import React from 'react';
import LeftFoot from './leftfoot.jsx';
export default class LeftLeg extends React.Component {
  render() {
    if (this.props.err == 0){
      return <div className="left-leg-wrapper">
        <div className="left-leg"></div>
      </div>;
    }else if (this.props.err == 1){
      return <div className="left-leg-wrapper">
        <LeftFoot />
        <div className="left-leg"></div>
      </div>;
    }
  }
}
