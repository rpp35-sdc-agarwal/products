import React from 'react';
import Search from './Search.jsx';
import QuestionList from './QuestionList.jsx';
import exampleQuestions from '../../examples/questionList-example.js'
import QuestionPopup from './QuestionPopup.jsx';

/*
  QuestionList should display up to 2 questions by default
*/
class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [exampleQuestions.results[0], exampleQuestions.results[1]],
      search: '',
      add: false
    }
  }
  
  handleSearch (keyword) {
    this.setState({
      search: keyword
    }, () => {
      console.log('searched: ', this.state.search);
    })
  }
  
  showMoreQuestions () {
    this.setState({
      questions:[...exampleQuestions.results]
    })
  }
  
  addQuestion () {
    this.setState({
      add: !this.state.add
    })
  }
  
  render() {
    return (
      <div id='QA' data-testid="test_questions">
        Questions component placeholder
        <Search handleSearch={this.handleSearch.bind(this)} />
        <QuestionList questions={this.state.questions} />
        <button onClick={this.showMoreQuestions.bind(this)}>MORE ANSWERED QUESTIONS</button>
        <button onClick={this.addQuestion.bind(this)}>ADD A QUESTION +</button>
        <div>
          {this.state.add ? <QuestionPopup toggleQuestion={this.addQuestion.bind(this)} /> : null}
        </div>
      </div>
    )
  }
}

export default Questions;