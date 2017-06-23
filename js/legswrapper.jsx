import React from 'react';
import RightLeg from './rightleg.jsx';
import LeftLeg from './leftleg.jsx';
export default class LegsWrapper extends React.Component {
  render() {
    if (this.props.err == 0){
      return <div className="legs-wrapper">
        <RightLeg err={0}/>
      </div>;
    }else if (this.props.err == 1){
      return <div className="legs-wrapper">
        <RightLeg err={1}/>
      </div>;
    }else if (this.props.err == 2){
      return <div className="legs-wrapper">
        <LeftLeg err={0}/>
        <RightLeg err={1}/>
      </div>;
    }else if (this.props.err == 3){
      return <div className="legs-wrapper">
        <LeftLeg err={1}/>
        <RightLeg err={1}/>
      </div>;
    }
  }
}
