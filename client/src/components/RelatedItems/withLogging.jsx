import React from 'react';
import ReactDOM from 'react-dom';

function withLogging(WrappedComponent, data) {

  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.state = {
        name: data,
        clickEvent: null
      }

    }


    handleClick(e) {
      var time = Date.now()
      var el = e.currentTarget.className;
      var widget = this.state.name;
      console.log(el)
      var data = {
        element: el,
        widget: widget,
        time: JSON.stringify(time)
      }
      this.setState({
        clickEvent: data
      }, () => console.log('what is new data', this.state.clickEvent))


    }

    render() {
      return <WrappedComponent name={this.state.name}
      data={this.state.clickEvent}
      handleClick={this.handleClick}
      {...this.props}/>

    }
  }
}

export default withLogging;