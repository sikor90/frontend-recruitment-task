import React from 'react';

export default class Word extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          word: this.props.word.split(''),
          index: this.props.index
      };
  }
  checkIndex(){
    let helper = this.props.index;
    return Array.from(this.state.word).map(function (item, index) {
      if (helper.indexOf(index) != -1){
        return <div className="letter" key={index}>{item}</div>;
      }
      return <div className="letter" key={index}></div>;
    })
  }
  render() {
    return <div className="word-wrapper">
      {this.checkIndex()}
    </div>;
  }
}
