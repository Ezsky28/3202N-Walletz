import 'bootstrap/dist/css/bootstrap.min.css';
import './wallet.css'; // Import the CSS file
import React, { useState, useEffect, useContext } from 'react';
import SideNav from '../components/sidenav';
import NavBar from '../components/navbar';
import Calendar from '../components/calendar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Table, Button, Modal, Form } from 'react-bootstrap';
import { UserContext } from '../context/userContext';
import toast from 'react-hot-toast';

function WalletPage() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [transactionToDelete, setTransactionToDelete] = useState(null);
  const [data, setData] = useState({
    userID: user?.user._id || '',
    tranType: '',
    description: '',
    amount: '',
    tranDate: selectedDate.toDateString(),
  });

  const addTransaction = async (e) => {
    e.preventDefault();
    const { userID, tranType, description, amount, tranDate } = data;
    try {
      const { data } = await axios.post('/addtransact', { userID, tranType, description, amount, tranDate });
      if (data.error) {
        toast.error(data.error);
        handleCloseAddModal();
      } else {
        setData({});
        toast.success('Transaction added');
        handleCloseAddModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        if (!res.data.valid) {
          navigate('/');
        }
      })
      .catch(err => console.log(err));
  }, [navigate]);

  useEffect(() => {
    setData(prevData => ({
      ...prevData,
      tranDate: selectedDate.toDateString(),
    }));
  }, [selectedDate]);

  const handleShowAddModal = () => setShowAddModal(true);
  const handleCloseAddModal = () => setShowAddModal(false);

  const handleShowDeleteModal = (transaction) => {
    setTransactionToDelete(transaction);
    setShowDeleteModal(true);
  };
  const handleCloseDeleteModal = () => setShowDeleteModal(false);

  const handleDeleteTransaction = () => {
    // Add deletion logic here (e.g., API call)
    toast.success('Transaction deleted');
    handleCloseDeleteModal();
  };

  return (
    <div className="d-flex vh-100">
      <SideNav actives={navStatus} className="flex-shrink-0" />
      <div className="d-flex flex-column flex-grow-1 overflow-hidden">
        <NavBar />
        <div className="scrollable-content">
          <Container fluid className="mt-3">
            <Row className="justify-content-center">
              <Col>
                <div className="wallet-card">
                  <Row>
                    <Col xs={12} md={6} className="calendar-section mb-4 mb-md-0">
                      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                      <Button variant="primary" className="add-transaction-btn mt-4" onClick={handleShowAddModal}>
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
                                <Button variant="danger" size="sm" onClick={() => handleShowDeleteModal(transaction)}>
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

      <Modal show={showAddModal} onHide={handleCloseAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addTransaction}>
            <Form.Group className="mb-3" controlId="formTransactionDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Enter description" value={data.description} onChange={(e) => setData({ ...data, description: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTransactionAmount">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="number" placeholder="Enter amount" value={data.amount} onChange={(e) => setData({ ...data, amount: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTransactionType">
              <Form.Label>Type</Form.Label>
              <Form.Control as="select" value={data.tranType} onChange={(e) => setData({ ...data, tranType: e.target.value })}>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this transaction?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            No
          </Button>
          <Button variant="danger" onClick={handleDeleteTransaction}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default WalletPage;
