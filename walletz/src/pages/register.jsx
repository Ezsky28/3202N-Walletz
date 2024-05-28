import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import './register.css'
import logo from '../assets/logo.png'
import { useState } from 'react'

function RegiserPage() {

    const [data, setData] = useState({
      email: '',
      password: '',
      conpassword: '',
    })

    const registerUser = (e) => {
      e.preventDefault()
    }
  
    return(
        <Container fluid className='register-container'>
        <Row className='justify-content-center'>
          <Col className='register-form-div'>
            <div className='logo'>
              <img src={logo} alt='walletz logo' className='register-logo'></img>
              <h2>WALLETZ</h2>
              <p>Create your account</p>
            </div>
            <Form onSubmit={registerUser}>
              <FloatingLabel controlId='formEmail' label="Email" className='register-inputs'>
                <Form.Control type='email' placeholder='Email' value={data.email} onChange={(e) => setData({...data, name: e.target.value})}/>
              </FloatingLabel>
              <FloatingLabel controlId='formPassword' label="Password" className='register-inputs'>
                <Form.Control type='password' placeholder='Password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
              </FloatingLabel>
              <FloatingLabel controlId='formConfirmPassword' label="Confirm Password" className='register-inputs'>
                <Form.Control type='password' placeholder='Confirm Password' value={data.conpassword} onChange={(e) => setData({...data, conpassword: e.target.value})}/>
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