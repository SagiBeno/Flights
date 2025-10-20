import React, { useState } from "react";
import { Card, Form, Row, Col } from "react-bootstrap";
import DestinationCard from "../components/DestinationCard";

const cities = [
  { name: "Paris", country: "France", image: "TODO-add-static-img-url-paris.jpg" },
  { name: "Tokyo", country: "Japan", image: "TODO-add-static-img-url-tokyo.jpg" },
  { name: "New York", country: "USA", image: "TODO-add-static-img-url-newyork.jpg" },
  { name: "TODO", country: "GET", image: "cities-from-backend.jpg" },
];

export default function Destinations() {
  const [filter, setFilter] = useState("");

  const filteredCities = cities // TODO filter cities if include filter value

  return (
    <div className="container">
      <Form.Control
        type="text"
        placeholder="Filter by city or country..."
        className="mb-3"
        onChange={(e) => setFilter(e.target.value)}
      />
      <Row>
        {filteredCities.map((city, idx) => (
          <Col md={4} key={idx}>
            {/* apply DestinationCard */}
            <DestinationCard city={city} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
