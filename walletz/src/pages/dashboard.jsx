import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from '../components/sidenav';
import NavBar from '../components/navbar';
import axios from 'axios'
import {useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './dashboard.css'; // Import the CSS file

function DashPage() {
    const navigate = useNavigate();
    const navStatus = {
        active1: true,
        active2: false,
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
                <div className="scrollable-content">
                    <Container fluid className="mt-3">
                        <Row>
                            <Col md={6}>
                                <div className="box">
                                    <h3>All Transactions</h3>
                                    <div className="transaction-card">
                                        <div className="transaction-icon">
                                            <i className="fas fa-wallet"></i>
                                        </div>
                                        <div className="transaction-details">
                                            <div>Total Savings</div>
                                            <div>₱ 18,000.00</div>
                                        </div>
                                    </div>
                                    <div className="transaction-card">
                                        <div className="transaction-icon">
                                            <i className="fas fa-wallet"></i>
                                        </div>
                                        <div className="transaction-details">
                                            <div>Total Expenses</div>
                                            <div>₱ 8,000.00</div>
                                        </div>
                                    </div>
                                    <div className="transaction-card">
                                        <div className="transaction-icon">
                                            <i className="fas fa-wallet"></i>
                                        </div>
                                        <div className="transaction-details">
                                            <div>Total Balance</div>
                                            <div>₱ 10,000.00</div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="box">
                                    <h3>Graph</h3>
                                    {/* Placeholder for graph */}
                                    <div className="graph">Graph here</div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col md={6}>
                                <div className="box">
                                    <h3>Recent Transactions</h3>
                                    <div className="recent-transactions">
                                        <div className="transaction">
                                            <span className="transaction-name text-danger">Snacks</span>
                                            <span className="transaction-amount text-danger">-500.00</span>
                                        </div>
                                        <div className="transaction">
                                            <span className="transaction-name text-success">Savings</span>
                                            <span className="transaction-amount text-success">+500.00</span>
                                        </div>
                                        <div className="transaction">
                                            <span className="transaction-name text-success">Allowance</span>
                                            <span className="transaction-amount text-success">+500.00</span>
                                        </div>
                                        <div className="transaction">
                                            <span className="transaction-name text-danger">Pamasahe</span>
                                            <span className="transaction-amount text-danger">-150.00</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="box">
                                    <h3>Min/Max</h3>
                                    <div className="min-max-box">
                                        <div className="min-max-item">
                                            <span className="min-max-label">Min</span>
                                            <span className="min-max-title">Savings</span>
                                            <span className="min-max-label">Max</span>
                                        </div>
                                        <div className="min-max-value">
                                            <span>₱ 1,500.00</span>
                                            <span>₱ 5,000.00</span>
                                        </div>
                                    </div>
                                    <div className="min-max-box">
                                        <div className="min-max-item">
                                            <span className="min-max-label">Min</span>
                                            <span className="min-max-title">Expense</span>
                                            <span className="min-max-label">Max</span>
                                        </div>
                                        <div className="min-max-value">
                                            <span>₱ 140.00</span>
                                            <span>₱ 4,000.00</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default DashPage;
