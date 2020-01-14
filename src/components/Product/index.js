import React from "react";
import { Col, Card, Button } from "react-bootstrap";

import "./styles.scss";

export default function Product(props) {
  const {
    product: { id, name, image, extraInfo, price },
    addProductToCart
  } = props;

  return (
    <Col xs={3} className="product">
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{extraInfo}</Card.Text>
          <Card.Text>$ {price.toFixed(2)}</Card.Text>
          <Button onClick={addProductToCart.bind(this, id, name)}>
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
