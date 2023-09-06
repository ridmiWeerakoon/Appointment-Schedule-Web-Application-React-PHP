import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css'; // Import your custom CSS file for styling
import { Link } from "react-router-dom";
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img5 from './images/img5.png'

const RegistrationPage = () => {
  return (
    <Container><br/>
      <h1>Registration Panel</h1><br/>
      <Row>
        <Col md={4}>
          <Card className="custom-card">
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title><Link to="/jsreg" style={{ textDecoration: "none" }}>Job Seeker Registration</Link></Card.Title>
              <Card.Text>
              Job Seeker Registration
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="custom-card">
            <Card.Img variant="top" src={img3} style={{height:"240px"}}  />
            <Card.Body>
            <Card.Title><Link to="/creg" style={{ textDecoration: "none" }}>Consultant Registration</Link></Card.Title>
              <Card.Text>
              Consultant Registration
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

       

        <Col md={4}>
          <Card className="custom-card">
            <Card.Img variant="top" src={img5} style={{height:"240px"}}/>
            <Card.Body>
            <Card.Title><Link to="/" style={{ textDecoration: "none" }}> Retun to Home Page</Link></Card.Title>
              <Card.Text>
              Retun to Home Page
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationPage;
