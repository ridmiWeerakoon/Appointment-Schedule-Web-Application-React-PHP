import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import img2 from "./images/img2.jpg";
import img6 from "./images/img6.png";
import "../App.css"; // Import your custom CSS file
import { Link } from "react-router-dom";

export default function CLogin() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the login data to your PHP backend
    axios
      .post("http://localhost:80/api4/user/login", credentials)
      .then((response) => {
        if (response.data.status === 1) {
          // Authentication successful, navigate to a protected page
          navigate("/aplist");
        } else {
          // Authentication failed, handle error (e.g., display an error message)
        }
      })
      .catch((error) => {
        // Handle any network or server errors here
      });
  };

  const customNavbarStyle = {
    paddingTop: "1px",
    paddingBottom: "1px",
    background: "linear-gradient(to right, #0000ff, #00aaff)", // Gradient colors
  };

  const customNavbarStyle1 = {
    paddingTop: "10px",
    paddingBottom: "10px",
    background: "linear-gradient(to right,#ffffff, #f0f0f0)", // Gradient colors
  };

  return (
    <div className="full-screen">
      <Container>
        <Row>
          <Col md={6} className="image-column">
            <img
              src={img2}
              alt="Image"
              style={{ height: "660px", marginLeft: "-300px", width: "700px" }}
            />
          </Col>
          <Col md={6} className="code-column">
            <Form onSubmit={handleSubmit}>
              <br />
              <br />
              <br />
              <h2>Consultant Login</h2>
              <br />
              <img
                src={img6}
                alt="Image"
                style={{ height: "100px", width: "100px" }}
              />
              <Form.Group
                controlId="formUsername"
                style={{ textAlign: "left" }}
              >
                <br />
                <Form.Label>Username :</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                  required
                  placeholder="Enter Username"
                />
              </Form.Group>
              <br />
              <Form.Group
                controlId="formPassword"
                style={{ textAlign: "left" }}
              >
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter Password"
                />
              </Form.Group>
              <br />
              <br />
              <Button variant="primary" type="submit" style={{ width: "100%" }}>
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
