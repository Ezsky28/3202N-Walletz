import 'bootstrap/dist/css/bootstrap.min.css'
import SideNav from '../components/sidenav';
import NavBar from '../components/navbar';
import Calendar from '../components/calendar'
import { Container, Row, Col} from 'react-bootstrap';


function WalletPage() {
    const navStatus = {
        active1: false,
        active2: true,
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
                            <div className="shadow border-3 rounded-3">
                                <Calendar/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default WalletPage;