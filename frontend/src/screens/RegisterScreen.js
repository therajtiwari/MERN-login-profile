import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../actions/userActions.js";

import { Row, Col, Form, Button } from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else if (password.length < 8) {
      setMessage("Password has to be atleast 8 characters long");
    } else {
      dispatch(register(name, username, email, password));
      if (userRegister.error) {
        setMessage(userRegister.error);
      }
    }
  };

  return (
    <FormContainer style={{ backgroundColor: "red !important" }}>
      <h1>Sign Up</h1>
      <br />
      <br />
      {message && <Message variant="danger" message={message} />}
      {/* {error && <Message variant="danger" message={error} />} */}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name" style={{ textAlign: "start" }}>
          <Form.Label>Name </Form.Label>
          <Form.Control
            type="name"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="username" style={{ textAlign: "start" }}>
          <Form.Label>Username </Form.Label>
          <Form.Control
            type="username"
            value={username}
            placeholder="Enter a username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <br />

        <Form.Group controlId="email" style={{ textAlign: "start" }}>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <br />

        <Form.Group controlId="password" style={{ textAlign: "start" }}>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <br />

        <Form.Group controlId="confirmPassword" style={{ textAlign: "start" }}>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password again"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <br />

        <Button type="submit" variant="success">
          Register
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          Already a Customer?{" "}
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;
