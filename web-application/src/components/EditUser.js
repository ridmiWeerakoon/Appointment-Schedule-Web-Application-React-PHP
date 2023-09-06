import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Container, Row, Col, Button } from "react-bootstrap";

export default function EditUser() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({ name: "", email: "", mobile: "" });

  const { id } = useParams();

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    axios.get(`http://localhost:80/api/user/${id}`).then(function (response) {
      const userData = response.data;
      setInputs(userData);
    });
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.put(`http://localhost:80/api/user/${id}/edit`, inputs).then(function (response) {
      console.log(response.data);
      navigate("/alist");
    });
  };

  return (
    <Container><br/>
      <h1>Reshedule Appoinments</h1><br/>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="name" style={{textAlign:"left"}}>
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={inputs.name}
                onChange={handleChange}
                placeholder="Enter name"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="email" style={{textAlign:"left"}}>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={inputs.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="mobile" style={{textAlign:"left"}}>
              <Form.Label>Mobile:</Form.Label>
              <Form.Control
                type="text"
                name="mobile"
                value={inputs.mobile}
                onChange={handleChange}
                placeholder="Enter mobile"
              />
            </Form.Group>
            <Form.Group controlId="date" style={{textAlign:"left"}}>
              <Form.Label>Date:</Form.Label>
              <Form.Control
                type="text"
                name="date"
                value={inputs.date}
                onChange={handleChange}
                placeholder="Enter date"
              />
            </Form.Group>
            <Form.Group controlId="time" style={{textAlign:"left"}}>
              <Form.Label>Time:</Form.Label>
              <Form.Control
                type="text"
                name="time"
                value={inputs.time}
                onChange={handleChange}
                placeholder="Enter time"
              />
            </Form.Group>
            <Form.Group controlId="c_name" style={{textAlign:"left"}}>
              <Form.Label>Consultant Name:</Form.Label>
              <Form.Control
                type="text"
                name="c_name"
                value={inputs.c_name}
                onChange={handleChange}
                placeholder="Enter Consultant Name"
              />
            </Form.Group>
          </Col>
        </Row><br/>
        <Button type="submit" style={{width:"1120px"}}>Save</Button>
      </Form>
    </Container>
  );
}
