import { Link, useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import './register.css'
import logo from '../assets/logo.png'
import { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'

function RegiserPage() {
    const navigate = useNavigate();
    const [data, setData] = useState({
      email: '',
      password: '',
      conpassword: '',
    })

    const registerUser = async (e) => {
      e.preventDefault();
      const {email, password, conpassword} = data
      try {
        const {data} = await axios.post('/register', {
          email, password, conpassword
        })

        if(data.error){
          toast.error(data.error)
        } else{
          setData({});
          toast.success('You are now registered')
          navigate('/')
        }
      } catch (error){
        console.log(error)
      }
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
                <Form.Control required type='email' placeholder='Email' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
              </FloatingLabel>
              <FloatingLabel controlId='formPassword' label="Password" className='register-inputs'>
                <Form.Control required type='password' placeholder='Password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
              </FloatingLabel>
              <FloatingLabel controlId='formConfirmPassword' label="Confirm Password" className='register-inputs'>
                <Form.Control required type='password' placeholder='Confirm Password' value={data.conpassword} onChange={(e) => setData({...data, conpassword: e.target.value})}/>
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