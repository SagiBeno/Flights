import React, { useState } from "react";
import { Card, Form, Row, Col } from "react-bootstrap";

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
            {/* TODO - apply DestinationCard */}
            <Card className="mb-3 shadow-sm">
              <Card.Img variant="top" src={city.image} />
              <Card.Body>
                <Card.Title>{city.name}</Card.Title>
                <Card.Text>{city.country}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
