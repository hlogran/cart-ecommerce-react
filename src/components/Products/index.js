import React from "react";
import { Container, Row } from "react-bootstrap";

import "./styles.scss";

export default function Products(props) {
  const {
    products: { result, loading, error }
  } = props;

  return (
    <container>
      <Row>
        {loading || !result
          ? "Loading..."
          : result.map((product, index) => (
              <div>
                <p>{product.name}</p>
              </div>
            ))}
      </Row>
    </container>
  );
}
