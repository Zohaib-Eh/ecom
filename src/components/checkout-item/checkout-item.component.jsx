import {
  CheckOutItemContainer,
  ImageContainer,
  BaseSpan,
  QuantitySpan,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../context/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemtoCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemtoCart(cartItem);

  return (
    <CheckOutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <QuantitySpan>
        <Arrow onClick={removeItemHandler}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>
          &#10095;
        </Arrow>
      </QuantitySpan>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>
        &#10005;
      </RemoveButton>
    </CheckOutItemContainer>
  );
};

export default CheckoutItem;
