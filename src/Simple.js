import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 5 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 5 });
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
    
      
      <div className="counter">

        <div className="count">
            <div>Counter = {this.state.count}</div>
        </div>

        <button className="increment" onClick={this.handleIncrement}>
          Increment
        </button>
        <button className="decrement" onClick={this.handleDecrement}>
          Decrement
        </button>
        <button className="reset" onClick={this.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}

export default Counter;

