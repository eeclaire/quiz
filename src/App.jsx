import React, { Component } from 'react';

import Question from './components/Question';
import questionList from './data/questions';

import './css/components/app.css';


class App extends Component {
  render() {
    const questions = questionList.map(question => {
      return (
        <Question key={question.id} 
                  answer1={question.ans1} 
                  answer2={question.ans2}
                  answer3={question.ans3}
                  answer4={question.ans4} 
                  prompt={question.prompt} />
      )
    });
    return (
      <div className="App">
        <div className="App-header">
          <h2>Find out what jean product you are!</h2>
        </div>
        <div>
          { questions }
        </div>
      </div>
    );
  }
}

export default App;
