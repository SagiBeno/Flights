import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { DatalistInput } from "react-datalist-input";

export default function TicketForm(props) {
    //name nem null
    //from, to létező hely a backendből
    //data nem null és jövőbeli

    const [form, setForm] = useState({ name: "", from: "", to: "", date: "" });

    const handleSubmit = e => {
        e.preventDefault();
        

    };

    return (
        <>
            <h3>Book a Ticket</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Control placeholder="Name" className="mb-2" />
                <DatalistInput
                    placeholder="Chocolate"
                    label="Select ice cream flavor"
                    onSelect={(item) => console.log(item.value)}
                    items={[
                    { id: 'Chocolate', value: 'Chocolate' },
                    { id: 'Coconut', value: 'Coconut' },
                    { id: 'Mint', value: 'Mint' },
                    { id: 'Strawberry', value: 'Strawberry' },
                    { id: 'Vanilla', value: 'Vanilla' },
                    ]}
                />
                <Form.Control placeholder="To" className="mb-2" />
                <Form.Control type="date" className="mb-2" />
                <Button type="submit">Add to Basket</Button>
            </Form>
        </>
    )
}