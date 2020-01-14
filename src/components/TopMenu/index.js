import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Cart from "../Cart";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

import "./styles.scss";

export default function TopMenu(props) {
  return (
    <Navbar bg="dark" variant="dark" className="top-menu">
      <Container>
        <BrandNav />
        {/* <MenuNav /> */}
        <Cart />
      </Container>
    </Navbar>
  );
}

function BrandNav() {
  return (
    <Navbar.Brand>
      <Logo />
      <h2>Icecream Shop!</h2>
    </Navbar.Brand>
  );
}

function MenuNav() {
  return (
    <Nav className="mr-auto">
      <Nav.Link>My Menu Item 1</Nav.Link>
      <Nav.Link>My Menu Item 2</Nav.Link>
      <Nav.Link>My Menu Item 3</Nav.Link>
    </Nav>
  );
}
