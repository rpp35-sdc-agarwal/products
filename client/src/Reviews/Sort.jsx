import React from 'react';

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <label htmlFor="sorter">Sort on:</label>
        <select name="sorter">
            <option>Helpful</option>
            <option>Newest</option>
            <option>Relevant</option>
        </select>
      </div>
    )
  }
}

export default Sort;