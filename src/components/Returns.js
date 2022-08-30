import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom';

function Returns (){

    return (
        <>
        <div>
            <div>
        <h1>Shipping & Returns</h1>
        <h4>Shipping</h4>
        <p>Your order will be shipped between 1 - 2 working days. A shipping confirmation will be emailed once your order has been sent out for delivery. Please keep in mind that orders may take longer to be delivered during busy periods and public holidays.
        </p>
        <h4>Returns</h4>
        <p>We're not able to offer free shipping nor provide returns free of charge. We have a 30-day return policy, which means you have 30 days after receiving your item to request a return. To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase. Items sent back to us without first requesting a return will not be accepted.

        You can always contact us for any return question here.</p>
        <h4>Damages and issues</h4>
        <p>Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.</p>
        <h4>Exchanges</h4>
        <p>The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.</p>
        <h4>Refunds</h4>
        <p>We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment method. Please remember it can take some time for your bank or credit card company to process and post the refund too.</p>
        </div>
        <div>
        <Link to='/'><Button variant="dark" size="lg">BACK TO SHOP</Button></Link> 
        </div>
        </div>
        </>
        
    )
}

export default Returns;

