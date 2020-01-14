import React from "react";
import { Button } from "react-bootstrap";
import { ReactComponent as CartEmpty } from "../../assets/svg/cart-empty.svg";

import "./styles.scss";

export default function Cart() {
  return (
    <>
      <Button variant="link" className="cart-button">
        <CartEmpty />
      </Button>
      <div className="cart-content">Here go the products</div>
    </>
  );
}
