
//import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import {Link} from "react-router-dom";




function CartItem({item}) {

   
    let [quant, setQuant] =useState(1)
  


    function total(num1, num2) {
        return num1 * num2
    }


    if (item.size.size === 'S' | item.size.size === 'M' | item.size.size === 'L' | item.size.size === 'XL') {
        if(quant > 0){


        return (<>
            <tr key={item.id}>
                <td>
                    <div className="list_view_item"><div className="list_view_item__img"><img className="cart__image" src={item.image} alt={item.title}></img></div>
                        <div className="list_view_item__title"><h5>{item.title}</h5><p>{item.size.size}</p><Button variant="dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                        </svg></Button></div></div> </td>
                <td>€ {item.price}.00</td>
                <td><div><p> {quant} </p></div><div> <Button variant="dark" onClick={()=> setQuant(quant+1)}>+</Button> <Button variant="dark" onClick={()=> setQuant(quant-1)}>-</Button></div></td>
                <td>€ {total(item.price,quant)}.00</td>
            </tr>
            
             </>
        )}else{
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

        }
    } else {

        return (
            <>
                <tr key={item.id}>
                    <td>
                        <div className="list_view_item"><div className="list_view_item__img"><img className="cart__image" src={item.image} alt={item.title}></img></div>
                            <div className="list_view_item__title"><h5>{item.title}</h5><Button variant="dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                            </svg></Button></div></div></td>
                    <td>€ {item.price}.00</td>
                    <td><div><p> {quant} </p></div><div> <Button variant="dark" onClick={()=> setQuant(quant+1)}>+</Button> <Button variant="dark" onClick={()=> setQuant(quant-1)}>-</Button></div></td>
                    <td>€ {total(item.price,quant)}.00</td>
                </tr>
                
                </>

        )
    }




};





export default CartItem;

/* for (let i = 0; i < cart.lenght; i++)*/
/*onChange={(e) => setQuant(e.target.value)} */
/*<input id={item.id} type="number" className="input__quant" valor={quant1} min="0" max="9" onChange={(e)=> {setQuant1(e.target.value)}}></input>*/
/*<div><p>{quant > 0 ? quant :""}</p></div><div>{quant > 0 ? <><Button variant="dark" onClick={()=> setQuant(++quant)}>+</Button> <Button variant="dark" onClick={()=> setQuant(--quant)}>-</Button></> :""} </div> */
/*<div><p>{quant > 0 ? quant :""}</p></div><div>{quant > 0 ? <><Button variant="dark" onClick={()=> setQuant(++quant)}>+</Button> <Button variant="dark" onClick={()=> setQuant(--quant)}>-</Button></> :""} </div> */