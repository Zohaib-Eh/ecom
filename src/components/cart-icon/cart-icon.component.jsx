import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { useContext } from 'react';
import { CartContext } from '../context/cart.context';
import './cart-icon.styles.scss'

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartItems, cartCount} = useContext(CartContext);
    const toggleIsCartOpen= () => setIsCartOpen(!isCartOpen);

    // Using reduce() function to get totalCartItems
    // const totalCartItems = cartItems.reduce((totalItems,item)=>{
    //     return totalItems = totalItems + item.quantity;
    //   },0)
    
    // console.log(totalCartItems)
    
    return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{cartCount}</span>
    </div>)
}

export default CartIcon;
