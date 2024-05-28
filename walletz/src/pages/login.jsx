import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import './login.css'
import logo from '../assets/logo.png'
import { useState } from 'react'
import axios from 'axios'

function LoginPage() {

    const [data, setData] = useState({
      email: '',
      password: '',
    })

    const loginUser = (e) =>{
      e.preventDefault()
      axios.get('')
    }

    return(
      <Container fluid className='login-container'>
        <Row className='justify-content-center'>
          <Col className='login-form-div'>
            <div className='logo'>
              <img src={logo} alt='walletz logo' className='login-logo'></img>
              <h2>WALLETZ</h2>
              <p>Please login to your account</p>
            </div>
            <Form onSubmit={loginUser}>
              <FloatingLabel controlId='formEmail' label="Email" className='login-inputs'>
                <Form.Control type='email' placeholder='Email' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
              </FloatingLabel>
              <FloatingLabel controlId='formPassword' label="Password" className='login-inputs'>
                <Form.Control type='password' placeholder='Password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
              </FloatingLabel>
              <Button variant="primary" type="submit" className='login-button'>
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