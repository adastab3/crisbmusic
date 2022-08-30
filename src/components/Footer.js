import logo_crisb from '../images/logo_crisb.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom'



function Footer() {
    return (
        <>
            <Container><div>
                <Row>
                    <Col><div>
                        <img src={logo_crisb} alt='Cris B' width='100px' />
                        </div></Col>
                    <Col><div>
                        <Link to='/returns'><p>Shipping & Returns</p></Link> 
                        <p>Contact</p>
                    </div></Col>
                    <Col><div>
                        <p>© 2022, CRIS B MUSIC SHOP by Vfcon Graphics</p>
                    </div></Col>
                </Row></div>
            </Container>



        </>
    )
}

export default Footer;