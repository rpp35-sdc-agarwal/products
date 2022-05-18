import React from 'react';
import Search from './Search.jsx';
import QuestionList from './QuestionList.jsx';
import exampleQuestions from '../../examples/questionList-example.js'

/*
  QuestionList should display up to 2 questions by default
*/
class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [exampleQuestions.results[0], exampleQuestions.results[1]],
      search: ''
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
  
  render() {
    return (
      <div id='QA' data-testid="test_questions">
        Questions component placeholder
        <Search handleSearch={this.handleSearch.bind(this)} />
        <QuestionList questions={this.state.questions} />
        <button onClick={this.showMoreQuestions.bind(this)}>MORE ANSWERED QUESTIONS</button>
        <button>ADD A QUESTION +</button>
      </div>
    )
  }
}

export default Questions;