import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions.js";
import { useHistory } from "react-router-dom";

// Route
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  let { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/login");
  };

  return (
    <header>
      <Navbar bg="primary" expand="lg" style={{ color: "white" }}>
        <Container style={{ width: "85%" }}>
          <LinkContainer to="/">
            <Navbar.Brand>
              {/* <h3>Nemesis Consultants</h3> */}
              <img
                src="./images/Nemesis_logo.png"
                alt=""
                style={{ width: "50%" }}
              />
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ marginLeft: "auto" }}>
              <LinkContainer to="/">
                <Nav.Link className="px-3">
                  <FontAwesomeIcon
                    className="nav-icon"
                    icon={faHome}
                    size="2x"
                    color="white"
                  />
                  <h5 className="nav-link-name">Home</h5>
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown
                  style={{
                    paddingLeft: "1rem",
                    fontSize: "1.4rem",
                    color: "white",
                  }}
                  title={userInfo.name}
                  id="username"
                >
                  <LinkContainer to="/profile">
                    <NavDropdown.Item> Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link className="px-3">
                    <FontAwesomeIcon
                      className="nav-icon"
                      icon={faUser}
                      size="2x"
                      color="white"
                    />
                    <h5 className="nav-link-name">Sign In</h5>
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
