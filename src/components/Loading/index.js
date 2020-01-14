import React from "react";
import { Spinner } from "react-bootstrap";

import "./styles.scss";

export default function Loading() {
  return (
    <div className="loading">
      <Spinner animation="border" roler="status" />
      <h5>Loading...</h5>
    </div>
  );
}
