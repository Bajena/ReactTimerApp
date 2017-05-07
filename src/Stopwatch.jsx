import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

class Stopwatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsElapsed: 0,
      currentState: 'stopped'
    }
  }

  start() {
    const intervalId = setInterval(this.increaseTimer.bind(this), 1000);

    this.setState({
      intervalId,
      currentState: 'running'
    });
  }

  stop() {
    clearInterval(this.state.intervalId);
    this.setState({
      currentState: 'stopped'
    });
  }

  increaseTimer() {
    this.setState({
      secondsElapsed: this.state.secondsElapsed + 1
    });
  }

  reset() {
    this.stop();
    this.setState({ secondsElapsed: 0 })
  }

  mainButton() {
    return this.state.currentState === 'running' ? (<Button bsStyle="primary" onClick={this.stop.bind(this)}>Pause</Button>) : (<Button bsStyle="primary" onClick={this.start.bind(this)}>Start</Button>)
  }

  componentWillUnmount() {
    this.reset();
  }

  render() {
    return (
      <div className="Stopwatch">
        <div className="Stopwatch-title">
          Time elapsed:
        </div>
        <div className="Stopwatch-amount">
          {this.state.secondsElapsed}
        </div>
        <div className="Stopwatch-buttons">
          <ButtonGroup>
            {this.mainButton()}
            <Button bsStyle="danger" onClick={this.reset.bind(this)}>Reset</Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
