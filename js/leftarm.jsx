import React from 'react';
import LeftHand from './lefthand.jsx';
export default class LeftArm extends React.Component {
  render() {
    if (this.props.err==0) {
      return <div>
        <div className="left-arm">
        </div>
      </div>;
    }else if (this.props.err==1) {
      return <div>
        <div className="left-arm">
        </div>
        <LeftHand />
      </div>;
    }
  }
}
