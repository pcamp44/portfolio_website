import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";

export default function NavComponent() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if(offset > 50) {
        setScrolled(true);
      }
      else {
       setScrolled(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return() => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar className={`navbar fixed-top ${scrolled? 'navbar-scroll' : ''}`} expand="md">
      <NavbarBrand href="/"><b>pauline</b></NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem><Link to={"/"}>Home</Link></NavItem>
          <NavItem><Link to={"/projectPage"}>Projects</Link></NavItem>
          <NavItem><Link to={"/gallery"}>Gallery</Link></NavItem>
          <NavItem><Link to={"/resume"}>Resume</Link></NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}