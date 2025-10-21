import { useState } from "react";
import { ListGroup, Card } from "react-bootstrap";

import TicketForm from "../components/TicketForm.jsx";

export default function Tickets() {
  const [basket, setBasket] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    
    setBasket([...basket, {
      name: e.target.elements[0].value,
      from: e.target.elements[1].value,
      to: e.target.elements[2].value,
      date: e.target.elements[3].value
    }]);
  };

  return (
    <div className="container">
      <Card>
        <Card.Body>
          <TicketForm onSubmit={handleSubmit} />
        </Card.Body>
      </Card>
      

      <Card>
        <Card.Body>
          <h4 className="mt-4">Your Basket</h4>
          <ListGroup>
            {basket.map((b, i) => (
              <ListGroup.Item key={i}>{`${b.name}: ${b.from} → ${b.to} on ${b.date}`}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}
