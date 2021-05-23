import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserDetails, updateUserProfile } from "../actions/userActions.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import {
  Row,
  Col,
  Form,
  Button,
  Container,
  Card,
  Modal,
} from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";

const ProfileScreen = ({ locaton, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");

  const userProfile = useSelector((state) => state.userProfile);
  const { loading, error, user } = userProfile;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;
  const updateError = userUpdateProfile.error;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  useEffect(() => {
    if (!userInfo) {
      history.push("/profile");
    } else {
      if (!user.name) {
        dispatch(getUserDetails());
      } else {
        setName(user.name);
        setEmail(user.email);
        setUsername(user.username);
        setAddress(user.address);
      }
    }
  }, [history, userInfo, user, dispatch]);

  const [modalState, setModalState] = useState("");
  const handleShowModalOne = () => {
    setModalState("modal-one");
  };

  const handleShowModalTwo = () => {
    setModalState("modal-two");
  };

  const handleShowModalThree = () => {
    setModalState("modal-three");
  };
  const handleShowModalFour = () => {
    setModalState("modal-four");
  };

  const handleClose = () => {
    setModalState("close");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("updating");
    
    dispatch(
      updateUserProfile({ id: user._id, name, username, address, email })
    );
  };

  const deleteAddress = (e) => {
    setAddress("");
    e.preventDefault();
    dispatch(
      updateUserProfile({ id: user._id, name, username, address, email })
    );
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h2>User Profile</h2>

          {error && <Message variant="danger" message={error} />}
          {updateError && <Message variant="danger" message={updateError} />}
          {success && (
            <Message variant="success" message={"Updated Successfully"} />
          )}

          {loading && <Loader />}
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Card className="p-3 " style={{ width: "80%" }}>
          <Row
            className="justify-content-center py-1"
            style={{ textAlign: "start" }}
          >
            <Col md={3} sm={4} xs={4}>
              <h5> Name:</h5>
            </Col>
            <Col md={3} sm={4} xs={4}>
              <h5> {name}</h5>
            </Col>
            <Col md={6} sm={4} xs={4}>
              <Button
                style={{ float: "right" }}
                variant="primary"
                onClick={handleShowModalOne}
              >
                <FontAwesomeIcon className="nav-icon" icon={faEdit} size="1x" />
              </Button>
              <Modal show={modalState === "modal-one"} onHide={handleClose}>
                <Modal.Body>
                  <Form onSubmit={submitHandler}>
                    <Form.Group controlId="name" style={{ textAlign: "start" }}>
                      <Form.Label>Name </Form.Label>
                      <Form.Control
                        type="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Form.Group>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={handleClose}
                      >
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Form>
                </Modal.Body>
              </Modal>
            </Col>
          </Row>

          <hr />
          <Row
            className="justify-content-center py-1"
            style={{ textAlign: "start" }}
          >
            <Col md={3} sm={4} xs={4}>
              <h5> Username:</h5>
            </Col>
            <Col md={3} sm={4} xs={4}>
              <h5> {username}</h5>
            </Col>
            <Col md={6} sm={4} xs={4}>
              <Button
                style={{ float: "right" }}
                variant="primary"
                onClick={handleShowModalTwo}
              >
                <FontAwesomeIcon className="nav-icon" icon={faEdit} size="1x" />
              </Button>
              <Modal show={modalState === "modal-two"} onHide={handleClose}>
                <Modal.Body>
                  <Form onSubmit={submitHandler}>
                    <Form.Group controlId="name" style={{ textAlign: "start" }}>
                      <Form.Label>Username </Form.Label>
                      <Form.Control
                        type="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </Form.Group>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={handleClose}
                      >
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Form>
                </Modal.Body>
              </Modal>
            </Col>
          </Row>

          <hr />
          <Row
            className="justify-content-center py-1"
            style={{ textAlign: "start" }}
          >
            <Col md={3} sm={4} xs={4}>
              <h5> Email:</h5>
            </Col>
            <Col md={3} sm={4} xs={4}>
              <h5> {email}</h5>
            </Col>
            <Col md={6} sm={4} xs={4}>
              <Button
                style={{ float: "right" }}
                variant="primary"
                onClick={handleShowModalThree}
              >
                <FontAwesomeIcon className="nav-icon" icon={faEdit} size="1x" />
              </Button>
              <Modal show={modalState === "modal-three"} onHide={handleClose}>
                <Modal.Body>
                  <Form onSubmit={submitHandler}>
                    <Form.Group controlId="name" style={{ textAlign: "start" }}>
                      <Form.Label>Email </Form.Label>
                      <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={handleClose}
                      >
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Form>
                </Modal.Body>
              </Modal>
            </Col>
          </Row>
          <hr />
          <Row
            className="justify-content-center py-1"
            style={{ textAlign: "start" }}
          >
            <Col md={3} sm={4} xs={4}>
              <h5> Address:</h5>
            </Col>
            <Col md={3} sm={4} xs={4}>
              <h5> {address}</h5>
            </Col>
            <Col md={3} sm={2} xs={2}>
              <Button
                style={{ float: "right" }}
                variant="primary"
                onClick={handleShowModalFour}
              >
                <FontAwesomeIcon className="nav-icon" icon={faEdit} size="1x" />
              </Button>
              <Modal show={modalState === "modal-four"} onHide={handleClose}>
                <Modal.Body>
                  <Form onSubmit={submitHandler}>
                    <Form.Group controlId="name" style={{ textAlign: "start" }}>
                      <Form.Label>Address </Form.Label>
                      <Form.Control
                        type="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </Form.Group>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={handleClose}
                      >
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Form>
                </Modal.Body>
              </Modal>
            </Col>
            <Col md={3} sm={2} xs={2}>
              <Button
                style={{ float: "right" }}
                variant="primary"
                onClick={deleteAddress}
              >
                <FontAwesomeIcon
                  className="nav-icon"
                  icon={faTrash}
                  size="1x"
                />
              </Button>
            </Col>
          </Row>
        </Card>
      </Row>
    </Container>
  );
};

export default ProfileScreen;
