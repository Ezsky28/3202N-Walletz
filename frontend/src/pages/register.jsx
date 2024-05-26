import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import './register.css'
import logo from '../assets/logo.png'

function RegiserPage() {
    return(
        <Container fluid className='register-container' md>
        <Row className='justify-content-center'>
          <Col className='register-form-div' md>
            <div className='logo'>
              <img src={logo} alt='walletz logo' className='register-logo'></img>
              <h2>WALLETZ</h2>
              <p>Create your account</p>
            </div>
            <Form>
              <FloatingLabel controlId='formEmail' label="Email" className='register-inputs'>
                <Form.Control type='email' placeholder='Email'/>
              </FloatingLabel>
              <FloatingLabel controlId='formPassword' label="Password" className='register-inputs'>
                <Form.Control type='password' placeholder='Password'/>
              </FloatingLabel>
              <FloatingLabel controlId='formConfirmPassword' label="Confirm Password" className='register-inputs'>
                <Form.Control type='password' placeholder='Confirm Password'/>
              </FloatingLabel>
              <Button variant="primary" type="submit" className='register-button'>
                Register
              </Button>
              <div className="signup-link">
                Already have an account? <Link to='/'>Sign in</Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    );
}

export default RegiserPage;