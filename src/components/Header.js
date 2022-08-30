import logo_headercrisb from '../images/logo_headercrisb.svg';
import logo_cart from '../images/logo_cart.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'




function Header() {
    return (


        <header >

            <div>
                <Row>
                    <Col>
                        <Link to='/'>
                            <img src={logo_headercrisb} className='logo_cb_header' alt='Cris B Music Shop' width='400px' /></Link>
                    </Col>
                    <Col>
                        <Link to='/cart'><img id="logo_cart_header" className='material-symbols-outlined' src={logo_cart} alt='cart' width={'30px'} />
                            <span className='item_totaL'>0</span></Link>
                    </Col>
                </Row>



            </div>

           
                <Container fluid>
                    <Navbar bg="dark" expand="lg" variant="dark">

                        <Navbar.Brand><Link to='/'>HOME</Link></Navbar.Brand>

                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link><Link to='/products'>Shop All</Link></Nav.Link>
                                <Nav.Link href="#action2">Accesories</Nav.Link>
                                <NavDropdown title="EP" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>

                            </Nav>

                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="dark" size="sm">Search</Button>
                            </Form>

                        </Navbar.Collapse>





                    </Navbar> </Container>





        </header>
    )
}

export default Header;