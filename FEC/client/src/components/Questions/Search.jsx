import React from 'react';


/*

*/
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }
  
  onSearch (e) {
    console.log(e.target.value)
    
    if (e.target.value.length >= 3) {
      this.props.handleSearch(e.target.value);
    } else {
      this.props.handleSearch('');
    }
    // this.setState({
    //   term: e.target.value
    // }, () => {
    //   if (this.state.term.length >= 3) {
    //     this.props.handleSearch(this.state.term);
      
    // })
    
    // if (e.target.value.length >= 3 ) {
    //   this.setState({
    //     term: e.target.value
    //   })
    // } else {
    //   this.setState({
    //     term: ''
    //   })
    // }
    // this.props.handleSearch(this.state.term);
  }
  
  render() {
    return (
      <div className='search-questions' data-testid='test-search'>
        <input className="QA-search" type="text" onChange={this.onSearch.bind(this)} placeholder="&#128269; Have a question? Search for answers..." ></input>
      </div>
    )
  }
}

export default Search;