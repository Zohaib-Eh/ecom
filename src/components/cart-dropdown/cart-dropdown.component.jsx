import { useContext } from 'react';
import Button from '../button/button.component';
import { CartContext } from '../context/cart.context';
import CartItem from '../cart-item/cart-item.comonent';

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item)=>{
                    {console.log(item)}
                    return <CartItem key={item.id} cartItem={item}/>
                })}
            </div>
            <Button>Checkout</Button>
        </div>
    )
}

export default CartDropdown;