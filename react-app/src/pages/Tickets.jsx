import { useState } from "react";
import { ListGroup } from "react-bootstrap";

import TicketForm from "../components/TicketForm.jsx";

export default function Tickets() {
  const [basket, setBasket] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target);
    //setBasket([...basket, form]);
  };

  return (
    <div className="container">
      <TicketForm onSubmit={handleSubmit} />

      <h4 className="mt-4">Your Basket</h4>
      <ListGroup>
        {basket.map((b, i) => (
          <ListGroup.Item key={i}>{`${b.name}: ${b.from} → ${b.to} on ${b.date}`}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
