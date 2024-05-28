import 'bootstrap/dist/css/bootstrap.min.css';
import './wallet.css'; // Import the CSS file
import React, { useState, useEffect} from 'react';
import SideNav from '../components/sidenav';
import NavBar from '../components/navbar';
import Calendar from '../components/calendar';
import axios from 'axios'
import {useNavigate } from 'react-router-dom'
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

function WalletPage() {
    const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const transactions = [
    { description: 'Snacks', amount: -500, type: 'expense' },
    { description: 'Savings', amount: 500, type: 'income' },
    { description: 'Allowance', amount: 500, type: 'income' },
    { description: 'Pamasahe', amount: -150, type: 'expense' },
  ];

  const walletBalance = 10000;

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
      <SideNav actives={navStatus} className="flex-shrink-0"/>
      <div className="d-flex flex-column flex-grow-1 overflow-hidden">
        <NavBar />
        <div className="scrollable-content">
          <Container fluid className="mt-3">
            <Row className="justify-content-center">
              <Col >
                <div className="wallet-card">
                  <Row>
                    <Col xs={12} md={6} className="calendar-section mb-4 mb-md-0">
                      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                      <Button variant="primary" className="add-transaction-btn mt-4">
                        ADD TRANSACTION
                      </Button>
                    </Col>
                    <Col xs={12} md={6} className="transactions-section">
                      <h5 className="text-center">{selectedDate.toDateString()}</h5>
                      <Table bordered hover className="mt-3">
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
                                <Button variant="warning" size="sm" className="me-2">
                                  Edit
                                </Button>
                                <Button variant="danger" size="sm">
                                  Delete
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                  <Row className="balance-section mt-4">
                    <Col className="d-flex justify-content-end">
                      <h5>Wallet Balance: <span className="wallet-balance">₱{walletBalance.toLocaleString()}</span></h5>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default WalletPage;
