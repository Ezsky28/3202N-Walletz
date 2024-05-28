import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Navbar} from 'react-bootstrap'

function NavBar() {
    return(
        <Navbar expand="lg" style={{backgroundColor:'#D9D9D9'}}>
        <Container fluid>
          <Navbar.Brand style={{color:'#355173', fontWeight:'bold', letterSpacing:'10px'}}>WALLETZ</Navbar.Brand>
        </Container>
      </Navbar>
    );
}

export default NavBar;