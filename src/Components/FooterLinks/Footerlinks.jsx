import React from 'react'
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import './Footerlinks.scss'
const Footerlinks = () => {
  return (
    <div className='footer-Link'>
      <Container>
        <h5>My Food</h5>
        <Navbar >
          <Row>
            <Col>
              <Navbar.Brand className='customelement' href="#">Tasty destinations for foodies</Navbar.Brand>
            </Col>
            <Col >
              <Navbar.Brand className='customelement' href="#">Home</Navbar.Brand>
              <Row>
                <Navbar.Brand className='customelement' href="#">Recipes</Navbar.Brand>
              </Row>
              <Row>
                <Navbar.Brand className='customelement' href="#">Tips</Navbar.Brand>
              </Row>
              <Row>
                <Navbar.Brand className='customelement' href="#">Contact</Navbar.Brand>
              </Row>
            </Col>
          </Row>
        </Navbar>
      </Container>
    </div>
  )
}
export default Footerlinks