import React from 'react';
import RightArm from './rightarm.jsx';
import LeftArm from './leftarm.jsx';
export default class Stomach extends React.Component {
  render() {
    if (this.props.err == 0) {
      return <div className="hangmanBody-wrapper">
        <div className="stomach">
          <div className="stomach-left"></div>
          <div className="stomach-right"></div>
        </div>
      </div>;
    }else if (this.props.err == 1) {
      return <div className="hangmanBody-wrapper">
        <div className="stomach">
          <div className="stomach-left"></div>
          <div className="stomach-right"></div>
        </div>
        <RightArm err={0}/>
      </div>;
    }else if (this.props.err == 2) {
      return <div className="hangmanBody-wrapper">
        <div className="stomach">
          <div className="stomach-left"></div>
          <div className="stomach-right"></div>
        </div>
        <RightArm err={1}/>
      </div>;
    }else if (this.props.err == 3) {
      return <div className="hangmanBody-wrapper">
        <LeftArm err={0}/>
        <div className="stomach">
          <div className="stomach-left"></div>
          <div className="stomach-right"></div>
        </div>
        <RightArm err={1}/>
      </div>;
    }else if (this.props.err == 4) {
      return <div className="hangmanBody-wrapper">
        <LeftArm err={1}/>
        <div className="stomach">
          <div className="stomach-left"></div>
          <div className="stomach-right"></div>
        </div>
        <RightArm err={1}/>
      </div>;
    }
  }
}
