import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png'

function Sidebar() {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '280px', height: '100vh' }}>
        <a href="/dashboard" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <img src={logo} alt='walletz logo' className='login-logo'></img><span className="fs-4">WALLETZ</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) => "nav-link" + (isActive ? " nav-link active" : "")}
                    end
                >
                    Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/wallet"
                    className={({ isActive }) => "nav-link" + (isActive ? " nav-link active" : "")}
                >
                    Wallet
                </NavLink>
            </li>
        </ul>
            <hr />
            <div className="account">
                <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                <strong>AccountName</strong> <a class="btn btn-danger btn-sm" href="/">Sign out</a>
            </div>
        </div>
    );
}

export default Sidebar;