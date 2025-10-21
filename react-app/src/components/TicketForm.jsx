import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

export default function TicketForm(props) {
    //name nem null
    //from, to létező hely a backendből
    //data nem null és jövőbeli

    const [form, setForm] = useState({ name: "", from: "", to: "", date: "" });
    const [fromPicked, setFromPicked] = useState("");
    const [toPicked, setToPicked] = useState("");
    const [datePicked, setDatePicked] = useState("");

    const [flights, setFlights] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3333/flight-info')
            .then(async response => {
                const data = await response.json()
                setFlights(data.flights)
                console.log(data.flights);
            })
            .catch(console.warn);
    }, []);

    const handleSubmit = e => {
        e.preventDefault();

        console.log(e.target);
    };

    return (
        <>
            <h3>Book a Ticket</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Control placeholder="Name" className="mb-2" />
                <Form.Control className="mb-2" as="select" onChange={e => setFromPicked(e.target.value)}>
                    {!fromPicked && <option>From</option>}
                    {flights.map((flight, idx) => {
                        //TODO impelement date
                        if(!toPicked){
                            return <option key={idx} value={flight.from}>{flight.from}</option>
                        }
                        else{
                            return flight.to === toPicked ? <option key={idx} value={flight.from}>{flight.from}</option> : null
                        }
                    })}
                </Form.Control>
                <Form.Control className="mb-2" as="select" onChange={e => setToPicked(e.target.value)}>
                    {!toPicked && <option>To</option>}
                    {flights.map((flight, idx) => {
                        //TODO impelement date
                        if(!fromPicked){
                            return <option key={idx} value={flight.to}>{flight.to}</option>
                        }
                        else{
                            return flight.from === fromPicked ? <option key={idx} value={flight.to}>{flight.to}</option> : null
                        }
                    })}
                </Form.Control>
                <Form.Control className="mb-2" as="select" onChange={e => setDatePicked(e.target.value)}>
                    {!datePicked && <option>Date</option>}
                    {flights.map((flight, idx) => {
                        if(flight.from === fromPicked && flight.to === toPicked){
                            return <option key={idx} value={flight.depart}>{flight.depart}</option>
                        }
                        else if(fromPicked && !toPicked){
                            return <option key={idx} value={flight.depart}>{flight.depart}</option>
                        }
                        else if(!fromPicked && toPicked){
                            return <option key={idx} value={flight.depart}>{flight.depart}</option>
                        }
                        else{
                            return <option key={idx} value={flight.depart}>{flight.depart}</option>
                        }
                    })}
                </Form.Control>
                <Button type="submit">Add to Basket</Button>
            </Form>
        </>
    )
}