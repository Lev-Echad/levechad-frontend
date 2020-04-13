import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './NavBar.scss'


const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="NavBar" color="light" light expand="md">
      <NavbarBrand href="/">לב אחד</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink href="/volunteer/register/">הרשמה להתנדבות</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
};
export default NavBar;