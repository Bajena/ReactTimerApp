import React, { Component } from 'react';
import TopNavigation from './TopNavigation.jsx';
import CountdownTimer from './CountdownTimer.jsx';
import Stopwatch from './Stopwatch.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'countdown'
    };
  }

  changeTab(activeTab) {
    this.setState({ activeTab });
  }

  activeView() {
    return this.state.activeTab === 'countdown' ? (<CountdownTimer />) : (<Stopwatch />);
  }

  render() {
    return (
      <div>
        <TopNavigation activeTab={this.state.activeTab} onSelectionChanged={this.changeTab.bind(this)} />
        {this.activeView()}
      </div>
    );
  }
}

export default App;
