import React from 'react';
import Sidebar from '../components/sidebar';

const Dashboard = () => {
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="flex-grow-1 p-3">
                <h1>All Transactions</h1>
                <p>Total Savings</p>
                <p>Total Expenses</p>
                <p>Total Balance</p>
                <h1>Recent Transactions</h1>
            </div>
        </div>
    );
};

export default Dashboard;