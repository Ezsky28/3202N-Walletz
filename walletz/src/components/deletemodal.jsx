import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function DeleteTransactionModal({ show, handleClose, handleSubmit, transaction }) {
  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Delete Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Are you sure you want to delete this transaction?</p>
            <p><strong>Description: </strong>{transaction?.description}</p>
            <p><strong>Amount: </strong>{transaction?.amount}</p>
            <Button variant="danger" onClick={handleSubmit}>
                Delete
            </Button>
            <Button variant="secondary" onClick={handleClose} className="ms-2">
                Cancel
            </Button>
        </Modal.Body>
    </Modal>
  );
}

export default DeleteTransactionModal;