import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import img7 from "./images/img7.png";
import { Link } from "react-router-dom";

export default function CForm() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("12:00");
  const [selectedOption, setSelectedOption] = useState(""); // State for select field

  const handleSubmit = (event) => {
    event.preventDefault();
    // Include date, time, and selectedOption in the inputs object
    const updatedInputs = {
      ...inputs,
      date: selectedDate,
      time: selectedTime,
      selectedOption: selectedOption, // Add the selected option to the inputs
    };
    axios
      .post("http://localhost:80/api/user/save", updatedInputs)
      .then(function (response) {
        console.log(response.data);
        navigate('/mchome');
      });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value); // Update the selectedOption state
  };

  return (
    <Container>
       <Link to="/chome">
        <img
          src={img7}
          alt="Image"
          style={{ height: "50px", width: "50px", marginRight: "-1000px" }}
        />
      </Link>
      <h1>Consultanter Register Form</h1>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="name" style={{ textAlign: "left" }}>
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" name="name" onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="email" style={{ textAlign: "left" }}>
              <Form.Label>Email:</Form.Label>
              <Form.Control type="text" name="email" onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="mobile" style={{ textAlign: "left" }}>
              <Form.Label>Mobile:</Form.Label>
              <Form.Control type="text" name="mobile" onChange={handleChange} />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="a_date" style={{ textAlign: "left" }}>
              <Form.Label>Date:</Form.Label>
              <Form.Control type="text" name="a_date" onChange={handleChange} />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="c_name" style={{ textAlign: "left" }}>
              <Form.Label>Consultant Name:</Form.Label>
              <Form.Control type="text" name="c_name" onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>
        <br />
        <Button variant="primary" type="submit" style={{ width: "100%" }}>
          Save
        </Button>
      </Form>
    </Container>
  );
}
