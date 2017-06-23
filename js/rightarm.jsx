import React from 'react';
import RightHand from './righthand.jsx';
export default class RightArm extends React.Component {
  render() {
    if (this.props.err==0) {
      return <div>
        <div className="right-arm"></div>
      </div>;
    }else if (this.props.err==1) {
      return <div>
        <div className="right-arm"></div>
        <RightHand />
      </div>;
    }
  }
}
