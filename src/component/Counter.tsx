import React, { Component } from 'react';

// Define the type for the state
interface CounterState {
  count: number;
}

// Since there are no props, we can use an empty object for the props type
class Counter extends Component<{}, CounterState> {
  // Type the state
  state: CounterState = {
    count: 0
  };
  
  // Type the increment method
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };
  
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
