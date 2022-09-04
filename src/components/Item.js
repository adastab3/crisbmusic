import { Container, Col, Row, Card, Button, Form } from "react-bootstrap";
//import { useState } from 'react';
import { Link } from 'react-router-dom';
//import addItem from "../service/AddItem";


function Item({add, producto, category, setAdd, cart, setCart, size, setSize, quant, setQuant}) {
    
    function addToCart(){
      
        setAdd(add + 1);
        
       cart.push({id:producto.id,
            image:producto.image,
            title:producto.name,
            size: {size},
            price:producto.price,
            
          
            
        })
        setCart(cart)
        
        setSize("")
       
      
        }

    function addToCart2(){
            setAdd(add + 1);
            
        
       cart.push({id:producto.id,
            image:producto.image,
            title:producto.name,
            price:producto.price,
            size:"onesize",
        
           
            
        })
        setCart(cart)
       
        

        }   
    

    if (category === 'wear') {

        return (

            <Container className='item' key={producto.id}>
                <Row>

                    <Col>
                        <Card.Img variant="top" src={producto.image} alt={producto.name} style={{ width: '30rem', backgroundColor: 'black', border: 'grey' }} />
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>{producto.name}</Card.Title>
                            <Card.Text>€ {producto.price}.00 </Card.Text>
                            <p>SIZE</p><Form.Select aria-label="Default select example" className='select_size' onChange={(e)=> setSize(e.target.value)}>
                                <option>Select size</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </Form.Select>
                            <Button type='button' variant="dark" onClick={()=> (addToCart() )
                            }>ADD TO CART</Button>
                            <Card.Text>{producto.description}</Card.Text>
                            <div><Link to='/products' ><Button variant="dark">Continue shopping</Button></Link></div>


                        </Card.Body>
                    </Col>
                </Row>
            </Container>
        )
    } if(category === 'wearcap'){
        return (
            <Container className='item' key={producto.id}>
                <Row>

                    <Col>
                        <Card.Img variant="top" src={producto.image} alt={producto.name} style={{ width: '30rem', backgroundColor: 'black', border: 'grey' }} />
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>{producto.name}</Card.Title>
                            <Card.Text>€ {producto.price}.00 </Card.Text>
                            <Button variant="dark" onClick={()=> (addToCart2()) 
                                }
                                >ADD TO CART</Button>
                            <Card.Text>{producto.description}</Card.Text>
                            <div><Link to='/products' ><Button variant="dark">CONTINUE SHOPPING</Button></Link></div>


                        </Card.Body>
                    </Col>
                </Row>
            </Container>

        )
    } else {
        return (
            <Container className='item' key={producto.id}>
                <Row>

                    <Col>
                        <Card.Img variant="top" src={producto.image} alt={producto.name} style={{ width: '30rem', backgroundColor: 'black', border: 'grey' }} />
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>{producto.name}</Card.Title>
                            <Card.Text>€ {producto.price}.00 </Card.Text>
                            <Button variant="dark" onClick={()=> addToCart2() 
                                }
                                >ADD TO CART</Button>
                            <Card.Text>{producto.description}</Card.Text>
                            <div><Link to='/products' ><Button variant="dark">CONTINUE SHOPPING</Button></Link></div>


                        </Card.Body>
                    </Col>
                </Row>
            </Container>
      )}}




export default Item;