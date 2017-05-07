import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class TopNavigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Timer App</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">Countdown</NavItem>
          <NavItem eventKey={2} href="#">Stopwatch</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default TopNavigation;
