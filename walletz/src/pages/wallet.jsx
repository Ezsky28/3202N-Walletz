import 'bootstrap/dist/css/bootstrap.min.css';
import './wallet.css'; // Import the CSS file
import React, { useState } from 'react';
import SideNav from '../components/sidenav';
import NavBar from '../components/navbar';
import Calendar from '../components/calendar';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

function WalletPage() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const transactions = [
        { description: 'Snacks', amount: -500, type: 'expense' },
        { description: 'Savings', amount: 500, type: 'income' },
        { description: 'Allowance', amount: 500, type: 'income' },
        { description: 'Pamasaje', amount: -150, type: 'expense' }
    ];

    const walletBalance = 10000;

    const navStatus = {
        active1: false,
        active2: true,
    };

    return (
        <div className="d-flex vh-100">
            <div className="flex-shrink-0">
                <SideNav actives={navStatus} />
            </div>
            <div className="d-flex flex-column flex-grow-1 overflow-hidden">
                <NavBar />
                <Container fluid className="flex-grow-1 d-flex flex-column align-items-center p-0">
                    <Row className="w-100 justify-content-center mt-4">
                        <Col xs={12} md={8} lg={6} xl={4}>
                            <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                        </Col>
                    </Row>
                    <Row className="w-100 justify-content-center mt-4">
                        <Col xs={12} md={8} lg={6} xl={4}>
                            <h5 className="text-center">January 21, 2022</h5>
                            <Table bordered hover>
                                <thead>
                                    <tr>
                                        <th>Description</th>
                                        <th>Amount</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transactions.map((transaction, index) => (
                                        <tr key={index} className={transaction.type === 'income' ? 'text-success' : 'text-danger'}>
                                            <td>{transaction.description}</td>
                                            <td>{transaction.amount > 0 ? `+${transaction.amount}` : transaction.amount}</td>
                                            <td>
                                                <Button variant="warning" size="sm" className="me-2">Edit</Button>
                                                <Button variant="danger" size="sm">Delete</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <Row className="w-100 justify-content-center mt-2">
                        <Col xs={12} md={8} lg={6} xl={4} className="d-flex justify-content-between">
                            <Button variant="primary">Add Transaction</Button>
                            <h5>Wallet Balance: <span className="wallet-balance">₱{walletBalance.toLocaleString()}</span></h5>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default WalletPage;
