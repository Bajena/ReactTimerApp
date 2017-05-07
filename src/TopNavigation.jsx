import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class TopNavigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: props.activeTab || 'countdown'
    }
  }

  handleSelect(eventKey, event){
    this.setState({
      activeTab: eventKey
    });

    if (this.props.onSelectionChanged) {
      this.props.onSelectionChanged(eventKey);
    }
  }

  isActive(tab) {
    return this.state.activeTab === tab;
  }

  render() {
    return (
      <Navbar onSelect={this.handleSelect.bind(this)}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Timer App</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey="countdown" className={this.isActive('countdown') ? 'active' : ''}>Countdown</NavItem>
          <NavItem eventKey="stopwatch" className={this.isActive('stopwatch') ? 'active' : ''}>Stopwatch</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default TopNavigation;
