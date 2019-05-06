import React, { Component, lazy, Suspense } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
// import MyComp from './components/MyComp';
import './style.css';

const MyComp = lazy (() => import ('./components/MyComp'));

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <Suspense fallback={<div>Loading...</div>}>
          <MyComp />
        </Suspense>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
