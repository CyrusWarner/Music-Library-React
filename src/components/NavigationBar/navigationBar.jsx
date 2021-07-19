import React from 'react';
import { Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap'

function NavigationBar(){
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Music Library</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/addSong">Add Song</Nav.Link>
    </Nav>
    
    
  </Navbar.Collapse>
</Navbar>
    )
}
export default NavigationBar;


