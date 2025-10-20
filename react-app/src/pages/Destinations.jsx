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
  const [filteredCities, setFilteredCities] = useState(cities);

  const handleCityFilter = (filter) => {
    const lowerFilter = filter.toLowerCase();
    const filtered = cities.filter(city =>
      city.name.toLowerCase().includes(lowerFilter) ||
      city.country.toLowerCase().includes(lowerFilter)
    );
    console.log("Filtered Cities:", filtered);
    setFilteredCities(filtered);
  }

  return (
    <div className="container">
      <Form.Control
        type="text"
        placeholder="Filter by city or country..."
        className="mb-3"
        onChange={(e) => handleCityFilter(e.target.value)}
      />
      <Row>
        {filteredCities.map((city, idx) => (
          <Col md={3} key={idx}>
            {/*apply DestinationCard*/}
            <DestinationCard city={city} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
