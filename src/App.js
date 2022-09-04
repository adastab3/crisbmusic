import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import Inicio from './components/Inicio';
import Cart from './components/Cart';
import Returns from './components/Returns';
import { useState, useEffect } from "react";
//import { Col, Card, Button } from "react-bootstrap";
//import { Container } from 'react-bootstrap';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Item from './components/Item';





function App() {
  let [data, setData] = useState([])
  let [add, setAdd]= useState(0)
  let [cart, setCart] = useState([])
  /*let [quant, setQuant] =useState(1)*/
  let [size, setSize] = useState("")
  
  

    useEffect(() => {fetch('https://apimocha.com/myshop/v1/allproducts').then(resp => resp.json()).then(datos => {
      setData(datos)
})},[])

    useEffect(()=>{setAdd(cart.length)},[cart.length])
    /*useEffect(()=>{setQuant1(quant1)},[quant1])
    useEffect(()=>{setQuant2(quant2)},[quant2])*/


  return (
    
 <BrowserRouter>
 
    <Header add={add}/> 
 
    <Routes>
      <Route path='/' element = {<Inicio />}></Route>
      <Route path='/products' element = {<div className='catalogo'> {data.map ((producto, index)=> {return <Products producto={producto} key={index}/>})}</div>}/>
      {data.map((producto, index)=> {return (<Route path={'/' + producto.id} element= {<Item category={producto.category} producto={producto} key={index} setAdd={setAdd} add={add} cart={cart} setCart={setCart} size={size} setSize={setSize} />} />)})}
      <Route path='/returns' element ={<Returns />}></Route>
      <Route path='/cart' element = {<Cart add={add} setAdd={setAdd} cart={cart} setCart={setCart} size={size} setSize={setSize}/>}></Route>
    </Routes>
   
    <Footer />
   
  </BrowserRouter>

  );
  
  }

export default App;

/*
let [data, setData] = useState([])

    useEffect(() => {fetch('https://apimocha.com/crisbmusicshop/v1/allproducts').then(resp => resp.json()).then(datos => {
      setData(datos)
})},[])
console.log(data)
  
  return (
    <>
    <Header  />
    <div className='catalogo'>
      {data.map((producto, index)=> {
        return (
          <Col>
    
    <Card key = {index} style={{ width: '18rem' , backgroundColor: 'black', border: 'grey' }}>
      <Card.Img variant="top" src={producto.image} alt={producto.name} />
      <Card.Body>
        <Card.Title>{producto.name}</Card.Title>
        <Card.Text>
        € {producto.price}.00
        </Card.Text>
        <Button variant="dark" onClick= {()=> {
            }}>view</Button> 
      </Card.Body>
    </Card>    
    
    </Col>
  
          
        )
      })}
   
   
 
    </div>
    <Footer  />
    </>
  );
 */
