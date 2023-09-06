import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker"; // Import TimePicker
import "react-time-picker/dist/TimePicker.css";
import img7 from "./images/img7.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function JForm() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("12:00"); // New state for selected time
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedInputs = {
      ...inputs,
      date: selectedDate,
      time: selectedTime, // Include the selected time in the inputs
      selectedOption: selectedOption,
    };
    axios
      .post("http://localhost:80/api1/user/save", updatedInputs)
      .then(function (response) {
        console.log(response.data);
        navigate("/jform")
      });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time); // Update the selectedTime state
  };

  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get("http://localhost:80/api1/users/").then(function (response) {
      console.log(response.data);
      setUsers(response.data);
    });
  }

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:80/api1/user1/${id}/delete`)
      .then(function (response) {
        console.log(response.data);
        getUsers();
      });
  };

  return (
    <Container>
      <Link to="/">
        <img
          src={img7}
          alt="Image"
          style={{ height: "50px", width: "50px", marginRight: "-1000px" }}
        />
      </Link>
      <h1>Job Seeker Appoinment Form</h1>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="name" style={{ textAlign: "left" }}>
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" name="name" onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="email" style={{ textAlign: "left" }}>
              <Form.Label>Email:</Form.Label>
              <Form.Control type="text" name="email" onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="mobile" style={{ textAlign: "left" }}>
              <Form.Label>Mobile:</Form.Label>
              <Form.Control type="text" name="mobile" onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="c_name" style={{ textAlign: "left" }}>
              <Form.Label>Consultant Name:</Form.Label>
              <Form.Control type="text" name="c_name" onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="date" style={{ textAlign: "left" }}>
              <Form.Label>Date:</Form.Label><br/>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
              />
            </Form.Group>

            <Form.Group controlId="time" style={{ textAlign: "left" }}>
              <Form.Label>Time:</Form.Label><br/>
              <TimePicker
                onChange={handleTimeChange}
                value={selectedTime}
                disableClock={true}
              />
            </Form.Group><br/>
            <input type="hidden" name="time" value={selectedTime} />
            <input type="hidden" name="date" value={selectedDate} />
            <Button variant="primary" type="submit" style={{ width: "100%" }}>
              Save
            </Button>
          </Col>
          <Col md={6}>
            <div>
              <br></br>
              <table className="table table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Consultant Name</th>
                    <th>Date</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, key) => (
                    <tr key={key}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.mobile}</td>
                      <td>{user.c_name}</td>
                      <td>{user.date}</td>
                      <td>{user.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
