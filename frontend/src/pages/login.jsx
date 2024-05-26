import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import './login.css'
import logo from '../assets/logo.png'

function LoginPage() {
  return(
    <Container fluid className='login-container' md>
      <Row className='justify-content-center'>
        <Col className='login-form-div' md>
          <div className='logo'>
            <img src={logo} alt='walletz logo' className='login-logo'></img>
            <h2>WALLETZ</h2>
            <p>Please login to your account</p>
          </div>
          <Form>
            <FloatingLabel controlId='formEmail' label="Email" className='login-inputs'>
              <Form.Control type='email' placeholder='Email'/>
             </FloatingLabel>
            <FloatingLabel controlId='formPassword' label="Password" className='login-inputs'>
              <Form.Control type='password' placeholder='Password'/>
            </FloatingLabel>
            <Button variant="primary" type="submit" className='login-button' href='/dashboard'>
              Login
            </Button>
            <div className="signin-link">
              Don’t have an account? <Link to='/register'>Sign up</Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;