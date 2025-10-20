import { Table } from "react-bootstrap";

export default function FlightTable(props) {
    let flights = props.flight ? [props.flight] : []
    if (props.flights) flights = props.flights

    return (
        <>
            <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>From</th><th>To</th><th>Flight</th><th>Departure</th><th>Arrival</th><th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {flights.map((f, i) => (
                    <tr key={i}>
                      <td>{f.from}</td>
                      <td>{f.to}</td>
                      <td>{f.flight}</td>
                      <td>{f.depart}</td>
                      <td>{f.arrive}</td>
                      <td>{f.price}</td>
                    </tr>
                  ))}
                </tbody>
            </Table>
        </>
    )
}