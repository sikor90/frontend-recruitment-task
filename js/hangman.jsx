import React from 'react';
import Bar from './bar.jsx';
import Head from './head.jsx';
import Neck from './neck.jsx';
import Stomach from './stomach.jsx';
import LegsWrapper from './legswrapper.jsx';
export default class HangMan extends React.Component {
  render() {
    if (this.props.errors == 0){
      return <div className="hangman-wrapper">
        <Bar />
      </div>;
    }else if (this.props.errors == 1) {
      return <div className="hangman-wrapper">
        <Bar />
        <Head />
      </div>;
    }else if (this.props.errors == 2) {
      return <div className="hangman-wrapper">
        <Bar />
        <Head />
        <Neck />
      </div>;
    }else if (this.props.errors == 3) {
      return <div className="hangman-wrapper">
        <Bar />
        <Head />
        <Neck />
        <Stomach err={0} />
      </div>;
    }else if (this.props.errors == 4) {
      return <div className="hangman-wrapper">
        <Bar />
        <Head />
        <Neck />
        <Stomach err={1} />
      </div>;
    }else if (this.props.errors == 5) {
      return <div className="hangman-wrapper">
        <Bar />
        <Head />
        <Neck />
        <Stomach err={2} />
      </div>;
    }else if (this.props.errors == 6) {
      return <div className="hangman-wrapper">
        <Bar />
        <Head />
        <Neck />
        <Stomach err={3} />
      </div>;
    }else if (this.props.errors == 7) {
      return <div className="hangman-wrapper">
        <Bar />
        <Head />
        <Neck />
        <Stomach err={4} />
      </div>;
    }else if (this.props.errors == 8) {
      return <div className="hangman-wrapper">
        <Bar />
        <Head />
        <Neck />
        <Stomach err={4} />
        <LegsWrapper err={0}/>
      </div>
    }else if (this.props.errors == 9) {
      return <div className="hangman-wrapper">
        <Bar />
        <Head />
        <Neck />
        <Stomach err={4} />
        <LegsWrapper err={1}/>
      </div>
    }else if (this.props.errors == 10) {
      return <div className="hangman-wrapper">
        <Bar />
        <Head />
        <Neck />
        <Stomach err={4} />
        <LegsWrapper err={2}/>
      </div>
    }else if (this.props.errors >= 11) {
      return <div className="hangman-wrapper">
        <Bar />
        <Head />
        <Neck />
        <Stomach err={4} />
        <LegsWrapper err={3}/>
      </div>
    };
  }
}
