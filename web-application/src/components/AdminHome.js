import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css'; // Import your custom CSS file for styling
import { Link } from "react-router-dom";
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.png'
import img7 from "./images/img7.png";

const AdminHome = () => {
  return (
    <Container>
      <h1>Admin Panel</h1><br/>
      <Row>
        <Col md={4}>
          <Card className="custom-card">
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title><Link to="/alist">Current Appoinments</Link></Card.Title>
              <Card.Text>
                Current Appoinments
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="custom-card">
            <Card.Img variant="top" src={img3} style={{height:"240px"}} />
            <Card.Body>
            <Card.Title><Link to="/jinfo">Job Seeker Details </Link></Card.Title>
              <Card.Text>
                Job Seeker Details
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="custom-card">
            <Card.Img variant="top" src={img4} />
            <Card.Body>
            <Card.Title><Link to="/cinfo">Consultant Details</Link></Card.Title>
              <Card.Text>
              Consultant Details
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="custom-card">
            <Card.Img variant="top" src={img5} style={{height:"240px"}}/>
            <Card.Body>
            <Card.Title><Link to="/">Retun to Home Page</Link></Card.Title>
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

export default AdminHome;
