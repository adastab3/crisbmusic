import { Container, Col, Row, Card, Button, Form } from "react-bootstrap";
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Item(props) {
    let [add, setAdd] = useState(0)

    if (props.producto.category === 'wear') {

        return (

            <Container className='item'>
                <Row>

                    <Col>
                        <Card.Img variant="top" src={props.producto.image} alt={props.producto.name} style={{ width: '30rem', backgroundColor: 'black', border: 'grey' }} />
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>{props.producto.name}</Card.Title>
                            <Card.Text>€ {props.producto.price}.00 </Card.Text>
                            <p>SIZE</p><Form.Select aria-label="Default select example" className='select_size'>
                                <option></option>
                                <option value="1">S</option>
                                <option value="2">M</option>
                                <option value="3">L</option>
                                <option value="4">XL</option>
                            </Form.Select>
                            <Button variant="dark" onClick={() => setAdd(add++)} >ADD TO CART</Button>
                            <Card.Text>{props.producto.description}</Card.Text>
                            <div><Link to='/products' ><Button variant="dark">CONTINUE SHOPPING</Button></Link></div>


                        </Card.Body>
                    </Col>
                </Row>
            </Container>
        )
    } else {
        return (
            <Container className='item'>
                <Row>

                    <Col>
                        <Card.Img variant="top" src={props.producto.image} alt={props.producto.name} style={{ width: '30rem', backgroundColor: 'black', border: 'grey' }} />
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>{props.producto.name}</Card.Title>
                            <Card.Text>€ {props.producto.price}.00 </Card.Text>
                            <Button variant="dark" onClick={() => setAdd(add++)} >ADD TO CART</Button>
                            <Card.Text>{props.producto.description}</Card.Text>
                            <div><Link to='/products' ><Button variant="dark">CONTINUE SHOPPING</Button></Link></div>


                        </Card.Body>
                    </Col>
                </Row>
            </Container>
        )

    }

}

export default Item;