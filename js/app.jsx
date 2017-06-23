import React from 'react';
import ReactDOM from 'react-dom';

import HangMan from './hangman.jsx';
import BlueTriangle from './bluetriangle.jsx';
import Word from './word.jsx';
import LettersMissed from './lettermissed.jsx';

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
          word: obj.word.toLowerCase()
        }, ()=>console.log(this.state.word));
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
    });
  }
  render() {
    if (this.state.word != '') {
      return <div className="main-wrapper">
        <input className="hidden-input" onKeyPress={e=>this.keyPress(e)} autoFocus/>
        <HangMan errors={this.state.errors}/>
        <LettersMissed word={this.state.word} errors={this.state.errors}/>
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
