import { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function TicketForm(props) {
    const [form, setForm] = useState({ name: "", from: "", to: "", date: "", amount: 1 });

    const [fromPicked, setFromPicked] = useState("");
    const [toPicked, setToPicked] = useState("");
    const [datePicked, setDatePicked] = useState("");

    const [flights, setFlights] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3333/flight-info')
            .then(async response => {
                const data = await response.json()
                setFlights(data)
                //console.log(data.flights);
            })
            .catch(console.warn);
    }, []);

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit(e);
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
                        if(flight.cityto === toPicked && datePicked === flight.depart){
                            return <option key={idx} value={flight.cityfrom}>{flight.cityfrom}</option>
                        }
                        else if(!datePicked && toPicked === flight.cityto){
                            return <option key={idx} value={flight.cityfrom}>{flight.cityfrom}</option>
                        }
                        else if(!toPicked && datePicked === flight.depart){
                            return <option key={idx} value={flight.cityfrom}>{flight.cityfrom}</option>
                        }
                        else if(!toPicked && !datePicked){
                            return <option key={idx} value={flight.cityfrom}>{flight.cityfrom}</option>
                        }
                    })}
                </Form.Control>
                <Form.Control className="mb-2" as="select" onChange={e => setToPicked(e.target.value)}>
                    {!toPicked && <option>To</option>}
                    {flights.map((flight, idx) => {
                        if(flight.cityfrom === fromPicked && datePicked === flight.depart){
                            return <option key={idx} value={flight.cityto}>{flight.cityto}</option>
                        }
                        else if(!datePicked && fromPicked === flight.cityfrom){
                            return <option key={idx} value={flight.cityto}>{flight.cityto}</option>
                        }
                        else if(!fromPicked && datePicked === flight.depart){
                            return <option key={idx} value={flight.cityto}>{flight.cityto}</option>
                        }
                        else if(!fromPicked && !datePicked){
                            return <option key={idx} value={flight.cityto}>{flight.cityto}</option>
                        }
                    })}
                </Form.Control>
                <Form.Control className="mb-2" as="select" onChange={e => setDatePicked(e.target.value)}>
                    {!datePicked && <option>Date</option>}
                    {flights.map((flight, idx) => {
                        if(flight.cityfrom === fromPicked && flight.cityto === toPicked){
                            return <option key={idx} value={flight.depart}>{flight.depart}</option>
                        }
                        else if(fromPicked === flight.cityfrom && !toPicked){
                            return <option key={idx} value={flight.depart}>{flight.depart}</option>
                        }
                        else if(!fromPicked && toPicked === flight.cityto){
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