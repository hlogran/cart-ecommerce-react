import React from "react";
import { Col, Card, Button } from "react-bootstrap";

import "./styles.scss";

export default function Product(props) {
  const {
    product: { name, image, extraInfo, price }
  } = props;

  return (
    <Col xs={3} className="product">
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{extraInfo}</Card.Text>
          <Card.Text>$ {price.toFixed(2)}</Card.Text>
          <Button>Add to cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
