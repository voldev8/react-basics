import React from 'react';

import './input.scss';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInput: '' }
    
    this.handleUserInput = this.handleUserInput.bind(this);
  };

  handleUserInput(e) {
    this.setState({ userInput: e.target.value })
  };

  render() {
    return (
      <div className="update_input">
        <h2>{this.state.userInput}</h2>
        <input type="text" onChange={this.handleUserInput} value={this.state.userInput} />
      </div>
    )
  };
}

export default Input;