import React from 'react';
import QuestionView from './QuestionView.jsx';


/*

*/
class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    // console.log('props.questions: ', props.questions)
    this.state = {
      questions: props.questions
    }
  }
  
  componentDidUpdate (prevProps) {
    // console.log('in componentDidUpdate: ', this.props.questions)
    if (this.props.questions !== prevProps.questions) {
      this.setState({
        questions: this.props.questions
      }, () => {
        console.log('this.state.questions: ', this.state.questions)
      })
    }
  }
  
  render() {
    // console.log('questions in QuestionList: ', this.props.questions)
    return (
      <div className='question-list' data-testid="test_questionlist" >
        {this.props.questions.map((question, i) => 
          <QuestionView key={question.question_id} question={question} currentProductName={this.props.currentProductName} questionId={question.question_id} />
        )}
      </div>
    )
  }
}

export default QuestionList;