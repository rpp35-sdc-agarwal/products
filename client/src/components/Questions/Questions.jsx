import React from 'react';
import Search from './Search.jsx';
import QuestionList from './QuestionList.jsx';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    }
  }
  
  render() {
    return (
      <div>
        Questions component placeholder
        <Search />
        <QuestionList questions={this.state.questions} />
      </div>
    )
  }
}

export default Questions;