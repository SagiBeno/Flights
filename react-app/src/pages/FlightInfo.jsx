import { Table } from "react-bootstrap";
import FlightTable from "../components/FlightTable";
import { useEffect } from "react";

const flights = [
  { from: "Paris", to: "Tokyo", flight: "AF274", depart: "10:30", arrive: "04:45", price: "€850" },
  { from: "New York", to: "Rome", flight: "DL198", depart: "13:00", arrive: "02:15", price: "$750" },
  { from: "TODO", to: "GET", flight: "fromBackend", depart: "12:34", arrive: "21:09", price: "$1" },
];

export default function FlightInfo() {
  useEffect( () => {
    getData();
  }, [])

  const getData = async () => {
    await fetch('', {method: 'GET'})
    .then(res => res.json())
    .then(console.log(res))
    .catch(console.warn)
  }

  return (
    <div className="container">
      <h3>Available Flights</h3>
      {/* apply FlightTable */}
      <FlightTable flights={flights} />
    </div>
  );
}
