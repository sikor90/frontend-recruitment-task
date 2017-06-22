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
        <Stomach />
      </div>;
    }else if (this.props.errors == 4) {
      return <div className="hangman-wrapper">
        <Bar />
        <Head />
        <Neck />
          <Stomach />
          <LegsWrapper />
      </div>
    };
  }
}
class LettersMissed extends React.Component {
  render() {
    return <div className="letterMissed-wrapper">
      <h3>YOU MISSED:</h3>
      <h2>A B C D E F G</h2>
    </div>;
  }
}
let indexToShow = [];
class Word extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          word: this.props.word.toLowerCase().split(''),
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

class BlueTriangle extends React.Component {
  render() {
    return <div className="blue-triangle">
    </div>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      errors: 0,
      oks: 0,
      indexToShow: []
    };
  }
  getWord() {
    fetch('http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5').then(
      resp => {
        return resp.json();
      }).then( obj => {
        this.setState({
          word: obj.word
        });
        console.log(this.state.word);
    });
  }
  componentDidMount() {
    this.getWord();
  }
  keyPress(e){
    this.setState({
      clickedLetter: e.key
    }, function() {

      function getAllIndexes(arr, val) {
        if(arr.indexOf(val)!=-1){
          let indexes = [], i;
          for(i = 0; i < arr.length; i++)
              if (arr[i] === val)
                  indexes.push(i);
          return indexes;
        }else {
          return [-1];
        }
      }
      let indexes = getAllIndexes(this.state.word, this.state.clickedLetter);
      for (let i = 0; i < indexes.length; i++) {
        let indexOfLetterInWord = indexes[i];
        if (indexOfLetterInWord != -1) {
          if (this.state.indexToShow.indexOf(indexOfLetterInWord) == -1) {
            this.state.indexToShow.push(indexOfLetterInWord);
            this.setState({
              oks: this.state.oks+1
            });
          }
        }else {
          this.setState({
            errors: this.state.errors+1
          });
        }
      }

      // let indexOfLetterInWord = this.state.word.indexOf(this.state.clickedLetter);
      // if (indexOfLetterInWord != -1) {
      //   if (this.state.indexToShow.indexOf(indexOfLetterInWord) == -1) {
      //     this.state.indexToShow.push(indexOfLetterInWord);
      //     this.setState({
      //       oks: this.state.oks+1
      //     });
      //   }
      // }else {
      //   this.setState({
      //     errors: this.state.errors+1
      //   });
      // }
    });
  }
  render() {
    if (this.state.word != '') {
      return <div className="main-wrapper">
        <input className="hidden-input" onKeyPress={e=>this.keyPress(e)} autoFocus/>
        <HangMan errors={this.state.errors}/>
        <LettersMissed />
        <Word word={this.state.word} index={this.state.indexToShow}/>
        <BlueTriangle />
      </div>;
    }else {
      return <h1>Pobieranie danych</h1>
    }

  }
}
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
