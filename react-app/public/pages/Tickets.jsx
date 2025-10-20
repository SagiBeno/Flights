import React, { useState } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";

export default function Tickets() {
  const [basket, setBasket] = useState([]);
  const [form, setForm] = useState({ name: "", from: "", to: "", date: "" });

  const handleSubmit = e => {
    e.preventDefault();
    setBasket([...basket, form]);
  };

  return (
    <div className="container">
      <h3>Book a Ticket</h3>
      {/* TODO - apply TicketForm */}
      <Form onSubmit={handleSubmit}>
        <Form.Control placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} className="mb-2" />
        <Form.Control placeholder="From" onChange={e => setForm({ ...form, from: e.target.value })} className="mb-2" />
        <Form.Control placeholder="To" onChange={e => setForm({ ...form, to: e.target.value })} className="mb-2" />
        <Form.Control type="date" onChange={e => setForm({ ...form, date: e.target.value })} className="mb-2" />
        <Button type="submit">Add to Basket</Button>
      </Form>

      <h4 className="mt-4">Your Basket</h4>
      <ListGroup>
        {basket.map((b, i) => (
          <ListGroup.Item key={i}>{`${b.name}: ${b.from} → ${b.to} on ${b.date}`}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
