import React from 'react';
import QuestionView from './QuestionView.jsx';


/*

*/
class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  render() {
    return (
      <div className='question-list' data-testid="test_questionlist" >
        {this.props.questions.map((question, i) => 
          <QuestionView key={i} question={question} currentProductName={this.props.currentProductName} questionId={question.question_id} />
        )}
      </div>
    )
  }
}

export default QuestionList;