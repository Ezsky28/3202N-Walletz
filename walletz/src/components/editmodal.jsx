import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function EditTransactionModal({ show, handleClose, formData, handleChange, handleSubmit, selectedDate }) {
  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Edit Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formType">
                    <Form.Label>Type</Form.Label>
                    <Form.Control as="select" name="type" value={formData.type} onChange={handleChange}>
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formDescription" className="mt-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="description" value={formData.description} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="formAmount" className="mt-3">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="number" name="amount" value={formData.amount} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="formDate" className="mt-3">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="text" readOnly value={selectedDate.toLocaleDateString()} />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                    Submit
                </Button>
            </Form>
        </Modal.Body>
    </Modal>
  );
}

export default EditTransactionModal;