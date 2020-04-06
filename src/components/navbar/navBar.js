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

import './navBar.scss'
const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    return (<Navbar className="navBar" color="light" sticky light expand="md">
        <NavbarBrand href="/">לב אחד</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav  navbar>
            <NavItem>
              <NavLink href="/volunteerRegister/">הרשמה להתנדבות</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>)
}

export default NavBar;