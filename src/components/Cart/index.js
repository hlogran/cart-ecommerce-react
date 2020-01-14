import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ReactComponent as CartEmpty } from "../../assets/svg/cart-empty.svg";

import "./styles.scss";

export default function Cart() {
  const [cartOpen, setCartOpen] = useState(false);

  const cartWidth = cartOpen ? "400px" : 0;

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
        <CartEmpty onClick={openCart} />
      </Button>
      <div className="cart-content" style={{ width: cartWidth }}>
        Here go the products
      </div>
    </>
  );
}
