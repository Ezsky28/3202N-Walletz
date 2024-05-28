import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {CDBSidebar, CDBSidebarContent, CDBSidebarMenu, CDBSidebarMenuItem,CDBSidebarFooter,CDBSidebarHeader, CDBIcon} from 'cdbreact'
import { Link } from 'react-router-dom'
import logout from '../assets/logout.png'




function SideNav({actives}) {
    return(
        <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#355173">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <CDBIcon icon='user'>sample@gmail.com</CDBIcon>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <Link exact to="/dashboard">
              <CDBSidebarMenuItem active={actives.active1} icon="columns">Dashboard</CDBSidebarMenuItem>
            </Link>
            <Link exact to="/wallet">
              <CDBSidebarMenuItem active={actives.active2} icon="wallet" >Wallet</CDBSidebarMenuItem>
            </Link>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <Button style={{backgroundColor:'transparent', border:'none'}}><img src={logout} alt='walletz logo' className='login-logo' style={{width:'20px', height:'30px'}}></img><p style={{fontWeight:'medium', color:'white'}}>Logout</p></Button>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
    );
}

export default SideNav;