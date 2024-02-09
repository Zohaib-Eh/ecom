
import { useContext } from 'react';
import { CartContext } from '../context/cart.context';
import {CartIconContainer,ShoppingIcon,ItemCount} from './cart-icon.styles.jsx'

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartItems, cartCount} = useContext(CartContext);
    const toggleIsCartOpen= () => setIsCartOpen(!isCartOpen);

    // Using reduce() function to get totalCartItems
    // const totalCartItems = cartItems.reduce((totalItems,item)=>{
    //     return totalItems = totalItems + item.quantity;
    //   },0)
    
    // console.log(totalCartItems)
    
    return (
    <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon'/>
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>)
}

export default CartIcon;
