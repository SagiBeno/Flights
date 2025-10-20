import React, { useState, useEffect } from "react";
import { Card, Form, Row, Col } from "react-bootstrap";
import DestinationCard from "../components/DestinationCard";


export default function Destinations() {
  const [citiesData, setCitiesData] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect( () => {
    async function fetchData() {
      await fetch("http://localhost:3333/destinations", {
        method: "GET"
      })
      .then(async res => {
        var responseData = await res.json() 
        console.log(responseData)
        setCitiesData(responseData.cities)
        setFilteredCities(responseData.cities)
      })
      .catch(console.warn)
      .finally(console.log("Avra Avra"))
    }
    fetchData()
  }, [])

  const handleCityFilter = (filter) => {
    const lowerFilter = filter.toLowerCase();
    const filtered = citiesData.filter(city =>
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
          <Col key={idx} md={4}>{/* TODO ez ilyen frontendes cuccos lécci Benőőőő :333  alapból volt még rajta: md={4}*/}
            {/*apply DestinationCard*/}
            <DestinationCard city={city} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
