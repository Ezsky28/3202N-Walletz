import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect} from 'react';
import SideNav from '../components/sidenav';
import NavBar from '../components/navbar';
import Calendar from '../components/calendar';
import axios from 'axios'
import {useNavigate } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';

function WalletPage() {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(new Date());

    const navStatus = {
        active1: false,
        active2: true,
    };

    useEffect(() => {
        axios.get('/verifyuser')
        .then(res => {
            console.log(res)
            if(!res.data.valid) {
                navigate('/')
            } 
         })
        .catch(err => console.log(err))
    })

    return (
        <div className="d-flex vh-100">
            <div className="flex-shrink-0">
                <SideNav actives={navStatus} />
            </div>
            <div className="d-flex flex-column flex-grow-1 overflow-hidden">
                <NavBar />
                <Container fluid className="flex-grow-1 d-flex flex-column justify-content-center align-items-center p-0">
                    <Row className="w-100 justify-content-center">
                        <Col xs={12} md={8} lg={6} xl={4} className="d-flex flex-column justify-content-center align-items-center">
                            <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                            <p className="mt-3">Selected Date: {selectedDate.toDateString()}</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default WalletPage;
