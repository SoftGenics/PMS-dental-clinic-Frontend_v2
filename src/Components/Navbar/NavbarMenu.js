import React from 'react'
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap'
const NavbarMenu = () => {
  return (
    <div>
<Navbar collapseOnSelect expand="lg">
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
    <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  <i className="fas fa-user-cog"></i>
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1"><i className="fas fa-user-cog"></i> Admin</Dropdown.Item>
    <Dropdown.Item href="#/action-2"><i className="fas fa-user-md"></i> Doctors</Dropdown.Item>
    <Dropdown.Item href="#/action-2"><i className="fas fa-user"></i> Patients</Dropdown.Item>
    <Dropdown.Item href="#/action-3"><i className="fas fa-sign-out-alt"></i> Log Out</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default NavbarMenu