import { Table } from "react-bootstrap";
import FlightTable from "../components/FlightTable";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";

export default function FlightInfo() {
  const [flights, setFlights] = useState([]);
  const [isLoading, setLoading] = useState(false)

  useEffect( () => {
    getData();
  }, [])

  const getData = async () => {
    setLoading(true)
    await fetch('http://localhost:3333/flight-info')
    .then(res => res.json())
    .then(data => setFlights(data.flights))
    .catch(console.warn)
    .finally(setLoading(false))
  }

  return (
    <div className="container">
      <h3>Available Flights</h3>

      <FlightTable flights={flights} />
      
      {
        isLoading && <Spinner />
      }
    </div>
  );
}
