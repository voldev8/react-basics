import React from 'react';

class Greeting extends React.Component {
  handleEvent() {
    alert('hi i am an event handler');
  }

  render() {
    return (
      <div>
        <h1>Hi there, {this.props.firstName}!</h1>
        <button onClick={this.handleEvent}>Click me</button>
      </div>
    )
  }
}

export default Greeting;

