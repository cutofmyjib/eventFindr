import React, {Component} from 'react';
import {render} from 'react-dom';
import Home from './home.js'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Home />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
