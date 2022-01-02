import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const friend = props.friend;
    
    const totalSalary = friend.reduce((sum, friend) => sum + parseFloat(friend.Salary) ,0)
    return (
        <div className='cart-div'>
            <h3>Friend Added : {friend.length}</h3>
            <p>Total Monthly Income : {totalSalary} </p>  
        </div>
    );
};

export default Cart;