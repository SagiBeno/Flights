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
    .then(async res =>  {
      const data = await res.json()
      setFlights(data)
      console.log(data)
    })
    .catch(console.warn)
  }

  return (
    <div className="container">
      <h3>Available Flights</h3>

      <FlightTable flights={flights} />

    </div>
  );
}
