import { Table } from "react-bootstrap";
import FlightTable from "../components/FlightTable";
import { useState,useEffect } from "react";



export default function FlightInfo() {
  const [flights, setFlights] = useState([]);

  useEffect( () => {
    getData();
  }, [])

  const getData = async () => {
    await fetch('http://localhost:3333/flight-info')
    .then(res => res.json())
    .then(data => setFlights(data.flights))
    .catch(console.warn)
  }

  return (
    <div className="container">
      <h3>Available Flights</h3>
      {flights.map((flight, index) => (
        <FlightTable key={index} flight={flight} />
      ))}
    </div>
  );
}
