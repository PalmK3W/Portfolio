import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarText,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Navbarr = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md" className="navbar fixed-top" >
        <NavbarBrand href="#">PalmK3W</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav  navbar >
            <NavItem>
              <NavLink href="#about" >About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#skill">Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#exp">Experience</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
         
          </Nav>     
        </Collapse>
      <NavbarText>Welcome to my Portfolio</NavbarText>
      </Navbar>
    </div>
  );
}

export default Navbarr;