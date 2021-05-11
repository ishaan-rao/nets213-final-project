import React from "react";
import {Nav, Navbar} from 'react-bootstrap';

class NavigationPanel extends React.Component {

  render() {
    return (
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">VacciNation</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="data">Data and Methodology</Nav.Link>
            <Nav.Link href="statistics">Analysis</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
          </Nav>
      </Navbar>
      
    )
  }
}

export default NavigationPanel
