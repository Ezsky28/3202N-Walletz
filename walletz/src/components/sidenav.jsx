import { useState, useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CDBSidebar, CDBSidebarContent, CDBSidebarMenu, CDBSidebarMenuItem, CDBSidebarFooter, CDBSidebarHeader, CDBIcon } from 'cdbreact';
import { Link } from 'react-router-dom';
import logout from '../assets/logout.png';
import { UserContext } from '../context/userContext';

function SideNav({ actives }) {
  const { user } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleLogout = () => {
    localStorage.removeItem('hasReloaded');
    // Add any additional logout logic here
    handleCloseModal();
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#355173">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <CDBIcon icon='user'>{user?.user.email}</CDBIcon>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <Link exact to="/dashboard">
              <CDBSidebarMenuItem active={actives.active1} icon="columns">Dashboard</CDBSidebarMenuItem>
            </Link>
            <Link exact to="/wallet">
              <CDBSidebarMenuItem active={actives.active2} icon="wallet">Wallet</CDBSidebarMenuItem>
            </Link>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <Button onClick={handleShowModal} style={{ backgroundColor: 'transparent', border: 'none' }}>
            <img src={logout} alt='walletz logo' className='login-logo' style={{ width: '20px', height: '30px' }} />
            <p style={{ fontWeight: 'medium', color: 'white' }}>Logout</p>
          </Button>
        </CDBSidebarFooter>
      </CDBSidebar>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to logout?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleLogout}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SideNav;
