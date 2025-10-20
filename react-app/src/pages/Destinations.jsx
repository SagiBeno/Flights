import React, { useState, useEffect } from "react";
import { Card, Form, Row, Col } from "react-bootstrap";
import DestinationCard from "../components/DestinationCard";


export default function Destinations() {
  const [citiesData, setCitiesData] = useState([]);
  const [filteredCities, setFilteredCities] = useState(citiesData);

  useEffect( () => {
    fetch()
  }, [])

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
          <Col key={idx}>{/* TODO ez ilyen frontendes cuccos lécci Benőőőő :333  alapból volt még rajta: md={4}*/}
            {/*apply DestinationCard*/}
            <DestinationCard city={city} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
