import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCartPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

// Route
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // const logoutHandler = () => {
  //   dispatch(logout());
  // };

  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container style={{ width: "85%" }}>
          <LinkContainer to="/">
            <Navbar.Brand>
              <h3>Neme</h3>
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
                  />
                  <h5 className="nav-link-name">Home</h5>
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown
                  style={{ paddingLeft: "1rem", fontSize: "1.4rem" }}
                  title={userInfo.name}
                  id="username"
                >
                  <LinkContainer to="/profile">
                    <NavDropdown.Item> Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item
                  // onClick={logoutHandler}
                  >
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
