import { useContext } from 'react';
import Button from '../button/button.component';
import { CartContext } from '../context/cart.context';
import CartItem from '../cart-item/cart-item.comonent';
import { useNavigate } from 'react-router-dom';

import {CartDropDownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles.jsx'

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate()

    const checkoutHandler = () =>{
        navigate('/checkout')
    }
    return (
        <CartDropDownContainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map((item)=>{
                        return <CartItem key={item.id} cartItem={item}/>
                    })) : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )
                }
                
            </CartItems>
            <Button onClick={checkoutHandler}>Checkout</Button>
        </CartDropDownContainer>
    )
}

export default CartDropdown;