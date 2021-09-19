import React, { useState } from "react";
import "./Navbar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="nav-dark" color="dark" dark expand="md">
        <NavbarBrand>
          <Link className="custom-link" to="/">
            Home
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="custom-link" to="/about">
                About Us
              </Link>
            </NavItem>
          </Nav>
          <NavbarText className="mr-3">
            <Link className="custom-link" to="/dashboard">
              Dashboard
            </Link>
          </NavbarText>
          <NavbarText className="mr-3">
            <Link className="custom-link" to="/login">
              Login
            </Link>
          </NavbarText>
          <NavbarText>
            <Link className="custom-link" to="/register">
              Register
            </Link>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
