import React, { useState, useEffect } from "react";
import { Card, Form, Row, Col } from "react-bootstrap";
import DestinationCard from "../components/DestinationCard";
import Spinner from "../components/Spinner";

export default function Destinations() {
  const [citiesData, setCitiesData] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [isLoading, setLoading] = useState(false)

  useEffect( () => {
    async function fetchData() {
      setLoading(true)
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
      .finally(setLoading(false))
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
          <Col key={idx} className="cols">
            {/*apply DestinationCard*/}
            <DestinationCard city={city} />
          </Col>
        ))}
      </Row>

      {
        isLoading && <Spinner />
      }
    </div>
  );
}
