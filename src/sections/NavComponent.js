import { useState } from "react";
import {Collapse, Nav, Navbar, NavbarToggler, NavItem} from "reactstrap";

export default function NavComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar dark expand="md" sticky="top">
      <NavbarToggler onClick={toggle}/>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="inline my-2 my-lg-0" navbar>
          <NavItem><a href="/">Home</a></NavItem>
          <NavItem><a href="#projects">Projects</a></NavItem>
          <NavItem><a href="#skills">Skills</a></NavItem>
          <NavItem><a href="#contact">Contact</a></NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}