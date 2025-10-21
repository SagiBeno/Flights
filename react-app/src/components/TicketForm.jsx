import { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

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

    const handleReset = e => {
        e.preventDefault();
        setFromPicked("");
        setToPicked("");
        setDatePicked("");

        const formElements = e.target.form.elements;
        formElements[1].value = "From";
        formElements[2].value = "To";
        formElements[3].value = "Date";
    }

    return (
        <>
            <h3>Book a Ticket</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Control placeholder="Name" className="mb-2" />
                <Form.Control className="mb-2" as="select" onChange={e => setFromPicked(e.target.value)}>
                    {!fromPicked && <option>From</option>}
                    {flights.map((flight, idx) => {
                        if(flight.to === toPicked && datePicked === flight.depart){
                            return <option key={idx} value={flight.from}>{flight.from}</option>
                        }
                        else if(!datePicked && toPicked === flight.to){
                            return <option key={idx} value={flight.from}>{flight.from}</option>
                        }
                        else if(!toPicked && datePicked === flight.depart){
                            return <option key={idx} value={flight.from}>{flight.from}</option>
                        }
                        else if(!toPicked && !datePicked){
                            return <option key={idx} value={flight.from}>{flight.from}</option>
                        }
                    })}
                </Form.Control>
                <Form.Control className="mb-2" as="select" onChange={e => setToPicked(e.target.value)}>
                    {!toPicked && <option>To</option>}
                    {flights.map((flight, idx) => {
                        if(flight.from === fromPicked && datePicked === flight.depart){
                            return <option key={idx} value={flight.to}>{flight.to}</option>
                        }
                        else if(!datePicked && fromPicked === flight.from){
                            return <option key={idx} value={flight.to}>{flight.to}</option>
                        }
                        else if(!fromPicked && datePicked === flight.depart){
                            return <option key={idx} value={flight.to}>{flight.to}</option>
                        }
                        else if(!fromPicked && !datePicked){
                            return <option key={idx} value={flight.to}>{flight.to}</option>
                        }
                    })}
                </Form.Control>
                <Form.Control className="mb-2" as="select" onChange={e => setDatePicked(e.target.value)}>
                    {!datePicked && <option>Date</option>}
                    {flights.map((flight, idx) => {
                        if(flight.from === fromPicked && flight.to === toPicked){
                            return <option key={idx} value={flight.depart}>{flight.depart}</option>
                        }
                        else if(fromPicked === flight.from && !toPicked){
                            return <option key={idx} value={flight.depart}>{flight.depart}</option>
                        }
                        else if(!fromPicked && toPicked === flight.to){
                            return <option key={idx} value={flight.depart}>{flight.depart}</option>
                        }
                        else if(!fromPicked && !toPicked){
                            return <option key={idx} value={flight.depart}>{flight.depart}</option>
                        }
                    })}
                </Form.Control>
                <Row>
                    <Col>
                        <Button variant="primary" type="submit">
                            Book Ticket
                        </Button>
                    </Col>

                    <Col>
                        <Button variant="secondary" className="ms-2" onClick={handleReset}>
                            Reset
                        </Button>
                    </Col>
                </Row>
                
            </Form>
        </>
    )
}