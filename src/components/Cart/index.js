import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { ReactComponent as CartEmpty } from "../../assets/svg/cart-empty.svg";
import { ReactComponent as CartFull } from "../../assets/svg/cart-full.svg";
import { ReactComponent as Close } from "../../assets/svg/close.svg";
import { ReactComponent as Garbage } from "../../assets/svg/garbage.svg";
import {
  removeDuplicatedItems,
  removeItem,
  countDuplicatedItems
} from "../../utils/arrayFunctions";

import "./styles.scss";

export default function Cart(props) {
  const { cartProducts, emptyCart, allProducts } = props;

  const [cartOpen, setCartOpen] = useState(false);

  const cartWidth = cartOpen ? "400px" : 0;

  const [singleProductCart, setSingleProductCart] = useState([]);

  useEffect(() => {
    const allProductsId = removeDuplicatedItems(cartProducts);
    setSingleProductCart(allProductsId);
  }, [cartProducts]);

  const openCart = () => {
    setCartOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeCart = () => {
    setCartOpen(false);
    document.body.style.overflow = "scroll";
  };

  return (
    <>
      <Button variant="link" className="cart-button">
        {cartProducts && cartProducts.length ? (
          <CartFull onClick={openCart} />
        ) : (
          <CartEmpty onClick={openCart} />
        )}
      </Button>
      <div className="cart-content" style={{ width: cartWidth }}>
        <CartContentHeader onClose={closeCart} onEmpty={emptyCart} />
        {singleProductCart.map((productId, index) => (
          <CartContentProducts key={index} product={productId} />
        ))}
      </div>
    </>
  );
}

function CartContentHeader(props) {
  const { onClose, onEmpty } = props;
  return (
    <div className="cart-content__header">
      <div>
        <Close onClick={onClose} />
        <h2>Cart</h2>
      </div>
      <Button variant="link" onClick={onEmpty}>
        Empty
        <Garbage />
      </Button>
    </div>
  );
}

function CartContentProducts(props) {
  const { product } = props;

  return <div className="cart-content__products">{product}</div>;
}
