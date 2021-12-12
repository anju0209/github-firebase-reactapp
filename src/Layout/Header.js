import React, { useState, useContext } from "react";
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
import { UserContext } from "../Context/UserContext";

const Header = () => {
  const context = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggler = () => setIsOpen(!isOpen);

  return (
    <Navbar light expand="md">
      <NavbarBrand>
        <Link
          to="/"
          className="text-white fonts mx-5"
          style={{
            textDecoration: "none",
            fontSize: "24px",
            letterSpacing: "2px",
          }}
        >
          GitFire App
        </Link>
      </NavbarBrand>
      <NavbarText
        className="text-white navtext ms-3"
        style={{ fontSize: "16px", letterSpacing: "2px", fontWeight: "400" }}
      >
        {context.user?.email ? context.user.email : ""}
      </NavbarText>
      <NavbarToggler onClick={toggler} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          {context.user ? (
            <NavItem>
              <NavLink
                onClick={() => context.setUser(null)}
                className="text-white navtext mx-5"
                style={{
                  letterSpacing: "1px",
                  marginRight: "40px",
                }}
              >
                Log Out
              </NavLink>
            </NavItem>
          ) : (
            <>
              <NavLink
                tag={Link}
                to="/signin"
                className="text-white navtext "
                style={{
                  letterSpacing: "1px",
                  marginRight: "40px",
                }}
              >
                Sign In
              </NavLink>
              <NavLink
                tag={Link}
                to="/signup"
                className="text-white navtext "
                style={{
                  letterSpacing: "1px",
                  marginRight: "50px",
                }}
              >
                Sign Up
              </NavLink>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
