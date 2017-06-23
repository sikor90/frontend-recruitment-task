import React from 'react';
import RightFoot from './rightfoot.jsx';
export default class RightLeg extends React.Component {
  render() {
    if (this.props.err == 0){
      return <div className="right-leg-wrapper">
        <div className="right-leg"></div>
      </div>;
    }else if (this.props.err == 1){
      return <div className="right-leg-wrapper">
        <div className="right-leg"></div>
        <RightFoot />
      </div>;
    }
  }
}
