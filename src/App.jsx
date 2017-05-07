import React, { Component } from 'react';
import Clock from './Clock.jsx';
import TopNavigation from './TopNavigation.jsx';
import CountdownTimer from './CountdownTimer.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <TopNavigation />
        <CountdownTimer />
      </div>
    );
  }
}

export default App;
