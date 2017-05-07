import React, { Component } from 'react';
import Clock from './Clock.jsx';
import { Form, FormControl, Button } from 'react-bootstrap';

class CountdownTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deadline: 'June 3, 2017',
      newDeadline: ''
    };
  }

  changeDeadline() {
    this.setState({ deadline: this.state.newDeadline });
  }

  render() {
    return (
      <div>
        <div className="CountdownTimer">
          <div className="CountdownTimer-title">
            Countdown to {this.state.deadline}
          </div>
          <Clock deadline={this.state.deadline}/>
          <Form inline>
            <FormControl
              placeholder="Enter date"
              className="Deadline-input"
              onChange={event => this.setState({newDeadline: event.target.value})}
            />
            <Button onClick={() => this.changeDeadline()}>Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default CountdownTimer;
