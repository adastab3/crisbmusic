import { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
import CartItem from "./CartItem";
import {useState} from 'react';

function Cart({add, cart, size, setSize}) {

     /*let [subt,setSubt]=useState(0)

useEffect(()=>{setSubt(subt)},[cart.length])    */           

/*function subtotal(cart){
      console.log(cart.length)
      let total=0
        for(let i = 0; i < cart.length; i++){
            return(
                console.log(cart[i].price))
                
        }
        console.log(total)
       
    };
   console.log(typeof total)*/



    if (add <= 0) {
        return (
            <>
                <div>
                    <div className="cart_header">
                    <h1 className='cart_header__title'> Your cart </h1>
                    <p>Your cart is currently empty.</p>
                    
                        <Link to='/products'><Button variant="light">CONTINUE SHOPPING <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg></Button></Link> 
                    </div>





                </div>

            </>

        )
    } else {



        return (
            <>
                <div className="cart_header">
                    <h1 className="cart_header__title"> Your cart </h1>

                    <div className="text_link">
                        <Link to='/products'><p> Continue shopping </p></Link>
                    </div>
                    <div>
                        <Table responsive="sm">
                            <thead>
                                <tr>
                                    <th>PRODUCT</th>
                                    <th>PRICE</th>
                                    <th>QUANTITY</th>
                                    <th>TOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                            {cart.map((item, index)=> { return <CartItem item={item} key={index}/>})}
                                
                                
                            </tbody>
                        </Table>

                        <div className='cart_footer'>
                            <div className='d-grid'>
                                <div className="cart_subtotal">
                                    <span className='cart_subtotal__title'>Subtotal</span>
                                    <span className="cart_subtotal__price">€ .00</span>
                                </div>

                                <Button variant='light' size='sm'>CHECK OUT</Button>
                            </div>

                        </div>


                    </div>


                </div>

            </>
        )
    }
}

export default Cart;   

