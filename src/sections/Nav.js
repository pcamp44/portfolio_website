export default function Nav() {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

/* 
<NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
<Collapse isOpen={!this.state.collapsed} navbar>
  <Nav navbar>
    <NavItem>
      <NavLink href="/components/">Components</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
    </NavItem>
  </Nav>
</Collapse>
*/