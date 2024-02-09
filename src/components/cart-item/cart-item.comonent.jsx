import {CartItemContainer,ItemDetails,ItemName} from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <span className="price">
          {quantity}x${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
