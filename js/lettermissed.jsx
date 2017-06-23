import React from 'react';

export default class LettersMissed extends React.Component {
  render() {
    if (this.props.errors >= 11) {
      return <div className="letterMissed-wrapper">
        <h3>YOU MISSED:</h3>
        <h2>{this.props.word}</h2>
      </div>;
    }else{
      return <div className="letterMissed-wrapper">
        <h3>YOU MISSED:</h3>
      </div>;
    }
  }
}
