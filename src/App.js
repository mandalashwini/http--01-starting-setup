import React, { Component } from 'react';
import Blog from './containers/Blog/Blog';
import {BrowerRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowerRouter>
      <div className="App">
        <Blog />
      </div>
      </BrowerRouter>
    );
  }
}

export default App;
