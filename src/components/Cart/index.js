import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { ReactComponent as CartEmpty } from "../../assets/svg/cart-empty.svg";
import { ReactComponent as CartFull } from "../../assets/svg/cart-full.svg";
import { ReactComponent as Close } from "../../assets/svg/close.svg";
import { ReactComponent as Garbage } from "../../assets/svg/garbage.svg";

import "./styles.scss";

export default function Cart(props) {
  const {
    cartProducts,
    emptyCart,
    allProducts,
    addProductToCart,
    removeProductFromCart
  } = props;

  const [cartOpen, setCartOpen] = useState(false);

  const cartWidth = cartOpen ? "400px" : 0;

  const [productsToRender, setproductsToRender] = useState([]);

  useEffect(() => {
    if (!allProducts.loading && allProducts.result) {
      const productsToRender = cartProducts.reduce((prev, curr) => {
        let p = prev.find(x => x.id === curr);
        if (p) {
          p.quantity++;
        } else {
          prev.push(
            Object.assign(
              { quantity: 1 },
              allProducts.result.find(x => x.id === curr)
            )
          );
        }
        return prev;
      }, []);

      setproductsToRender(productsToRender.sort((a, b) => a - b));
    } else {
      setproductsToRender([]);
    }
  }, [cartProducts, allProducts]);

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
        <div className="cart-content__products">
          {productsToRender.map((p, i) => (
            <CartContentProduct
              key={i}
              product={p}
              increaseQuantity={addProductToCart}
              decreaseQuantity={removeProductFromCart}
            />
          ))}
        </div>
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

function CartContentProduct(props) {
  const { product, increaseQuantity, decreaseQuantity } = props;

  return (
    <div className="cart-content__product">
      <img src={product.image} alt={product.name} />
      <div className="cart-content__product-info">
        <div>
          <h3>{product.name.substr(0, 25)}...</h3>
          <p>{product.price.toFixed(2)} € / ud.</p>
        </div>
        <div>
          <p>Items: {product.quantity} un.</p>
          <div>
            <button onClick={() => increaseQuantity(product.id)}>+</button>
            <button onClick={() => decreaseQuantity(product.id)}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
}
