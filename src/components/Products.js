import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import { Route } from 'react-router-dom';
import Item from './Item';
//import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function Products (props) {
  
    return (
   
       
  <>
    <Card key = {props.producto.id} style={{ width: '18rem' , backgroundColor: 'black', border: 'grey' }}>
      <Card.Img variant="top" src={props.producto.image} alt={props.producto.name} />
      <Card.Body>
        <Card.Title>{props.producto.name}</Card.Title>
        <Card.Text>
        € {props.producto.price}.00
        </Card.Text>
        <Link to={'/' + props.producto.id}><Button variant="dark">view</Button></Link>  
      </Card.Body>
    </Card>  </>  
    
        
 
      )
    }



export default Products;

