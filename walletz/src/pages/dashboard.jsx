import 'bootstrap/dist/css/bootstrap.min.css'
import SideNav from '../components/sidenav';
import NavBar from '../components/navbar';
import { Container, Row, Col} from 'react-bootstrap';



function DashPage() {
    const navStatus = {
        active1: true,
        active2: false,
    };
    return(
        <div className="d-flex vh-100">
            <div className="flex-shrink-0">
                <SideNav actives={navStatus} />
            </div>
            <div className="d-flex flex-column flex-grow-1 overflow-hidden">
                <NavBar />
                <Container fluid className="flex-grow-1 d-flex flex-column justify-content-center align-items-center p-0">
                    <Row className="w-100 justify-content-center">
                        <Col xs={12} md={8} lg={6} xl={4} className="text-center">
                            <div className="p-3 w-100 h-100 shadow border-3 rounded-3">
                                <h1>Dashboard</h1>
                                <p>This is the main content area.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default DashPage;