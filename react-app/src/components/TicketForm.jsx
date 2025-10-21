import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function TicketForm(props) {
    //name nem null
    //from, to létező hely a backendből
    //data nem null és jövőbeli

    const [form, setForm] = useState({ name: "", from: "", to: "", date: "" });
    const [fromPicked, setFromPicked] = useState(false);
    const [toPicked, setToPicked] = useState(false);
    const [datePicked, setDatePicked] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        console.log(e.target);
    };

    return (
        <>
            <h3>Book a Ticket</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Control placeholder="Name" className="mb-2" />
                <Form.Control className="mb-2" as="select" onChange={e => setFromPicked(e.target.value !== "From")}>
                    {!fromPicked && <option>From</option>}
                    <option>Budapest</option>
                    <option>London</option>
                    <option>New York</option>
                </Form.Control>
                <Form.Control className="mb-2" as="select" onChange={e => setToPicked(e.target.value !== "To")}>
                    {!toPicked && <option>To</option>}
                    <option>Budapest</option>
                    <option>London</option>
                    <option>New York</option>
                </Form.Control>
                <Form.Control className="mb-2" as="select" onChange={e => setDatePicked(e.target.value !== "Date")}>
                    {!datePicked && <option>Date</option>}
                    <option>10:30</option>
                    <option>13:00</option>
                    <option>15:00</option>
                </Form.Control>
                <Button type="submit">Add to Basket</Button>
            </Form>
        </>
    )
}