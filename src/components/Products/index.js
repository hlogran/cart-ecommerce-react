import React from "react";
import { Container, Row } from "react-bootstrap";
import Loading from "../Loading";
import Product from "../Product";

import "./styles.scss";

export default function Products(props) {
  const {
    products: { result, loading, error },
    addProductToCart
  } = props;

  return (
    <Container>
      <Row>
        {loading || !result ? (
          <Loading />
        ) : (
          result.map((product, index) => (
            <Product
              key={index}
              product={product}
              addProductToCart={addProductToCart}
            />
          ))
        )}
      </Row>
    </Container>
  );
}
