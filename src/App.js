import React, { Component } from 'react';
//import the Calculator Component 
import Calculator from './components/Calculator/Calculator';

class App extends Component {
  render() {
    return (
      <div>
        <h2>React Calculator</h2>
        <Calculator />
      </div>
    );
  }
}

export default App;
