import React from "react";
import {Nav, Navbar} from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class NavigationPanel extends React.Component {

  render() {
    return (
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">VacciNation</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="data">Data and Methodology</Nav.Link>
            <Nav.Link href="statistics">Statistics</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
          </Nav>
      </Navbar>
      
    )
  }
}

export default NavigationPanel
