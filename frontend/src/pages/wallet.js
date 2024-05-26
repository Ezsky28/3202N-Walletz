import React from 'react';
import Sidebar from '../components/sidebar';

const Wallet = () => {
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="flex-grow-1 p-3">
                <h1>Wallet</h1>
                <p>This is the main content area.</p>
            </div>
        </div>
    );
};

export default Wallet;