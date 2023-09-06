import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css'; // Import your custom CSS file for styling
import { Link } from "react-router-dom";
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.png'

const LoginPage = () => {
  return (
    <Container><br/>
      <h1>Login Panel</h1><br/>
      <Row>
        <Col md={4}>
          <Card className="custom-card">
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title><Link to="/jlogin" style={{ textDecoration: "none" }}>  Job Seeker Login</Link></Card.Title>
              <Card.Text>
              Job Seeker Login
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="custom-card">
            <Card.Img variant="top" src={img3} style={{height:"240px"}} />
            <Card.Body>
            <Card.Title><Link to="/clogin" style={{ textDecoration: "none" }}>Consultant Login</Link></Card.Title>
              <Card.Text>
              Consultant Login
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>


        <Col md={4}>
          <Card className="custom-card">
            <Card.Img variant="top" src={img3} style={{height:"240px"}} />
            <Card.Body>
            <Card.Title><Link to="/alogin" style={{ textDecoration: "none" }}>Admin Login</Link></Card.Title>
              <Card.Text>
              Admin Login
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>


       

        <Col md={4}>
          <Card className="custom-card">
            <Card.Img variant="top" src={img5} style={{height:"240px"}}/>
            <Card.Body>
            <Card.Title><Link to="/" style={{ textDecoration: "none" }}>Retun to Home Page</Link></Card.Title>
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

export default LoginPage;
