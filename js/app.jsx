import React from 'react';
import ReactDOM from 'react-dom';

class Bar extends React.Component {
  render() {
    return <div className="hang-wrapper">
      <div className="bar"></div>
      <div className="hang"></div>
    </div>;
  }
}
class Head extends React.Component {
  render() {
    return <img className="head" src="imgs/head.png" />;
  }
}
class Neck extends React.Component {
  render() {
    return <div className="neck"></div>;
  }
}
class Stomach extends React.Component {
  render() {
    return <div className="hangmanBody-wrapper">
      <LeftArm />
      <div className="stomach">
        <div className="stomach-left"></div>
        <div className="stomach-right"></div>
      </div>
      <RightArm />
    </div>;
  }
}
class RightArm extends React.Component {
  render() {
    return <div>
      <div className="right-arm"></div>
      <RightHand />
    </div>;
  }
}
class LeftArm extends React.Component {
  render() {
    return <div>
      <div className="left-arm">
      </div>
      <LeftHand />
    </div>;
  }
}
class RightHand extends React.Component {
  render() {
    return <div className="right-hand">
    </div>;
  }
}
class LeftHand extends React.Component {
  render() {
    return <div className="left-hand">
    </div>;
  }
}
class LeftFoot extends React.Component {
  render() {
    return <div className="left-foot">
    </div>;
  }
}
class LeftLeg extends React.Component {
  render() {
    return <div className="left-leg-wrapper">
      <LeftFoot />
      <div className="left-leg"></div>
    </div>;
  }
}
class RightFoot extends React.Component {
  render() {
    return <div className="right-foot">
    </div>;
  }
}
class RightLeg extends React.Component {
  render() {
    return <div className="right-leg-wrapper">
      <div className="right-leg"></div>
      <RightFoot />
    </div>;
  }
}
class LegsWrapper extends React.Component {
  render() {
    return <div className="legs-wrapper">
      <LeftLeg />
      <RightLeg />
    </div>;
  }
}
class HangMan extends React.Component {
  render() {
    return <div className="hangman-wrapper">
      <Bar />
      <Head />
      <Neck />
      <Stomach />
      <LegsWrapper />
    </div>;
  }
}
class LettersMissed extends React.Component {
  render() {
    return <div className="letterMissed-wrapper">

    </div>;
  }
}
class Word extends React.Component {
  render() {
    return <div className="word-wrapper">

    </div>;
  }
}

class BlueTriangle extends React.Component {
  render() {
    return <div className="blue-triangle">
    </div>;
  }
}

class App extends React.Component {
  render() {
    return <div className="main-wrapper">
      <HangMan />
      <LettersMissed />
      <Word />
      <BlueTriangle />
    </div>;
  }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
