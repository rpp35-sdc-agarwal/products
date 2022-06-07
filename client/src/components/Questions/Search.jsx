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
  
  onSearch () {
    return this.props.handleSearch(this.state.term);
  }
  
  onChange (e) {
    this.setState({
      term: e.target.value
    })
  }
  
  render() {
    return (
      <div className='search-questions' data-testid='test-search'>
        <h4>Search questions</h4>
        <input type="text" onChange={this.onChange.bind(this)} ></input>
        <button onClick={this.onSearch.bind(this)} >SEARCH</button>
      </div>
    )
  }
}

export default Search;