import { useState } from "react";
import { ListGroup, Card, Row, Col } from "react-bootstrap";

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
      <Row>
        <Col>
          <Card className="mb-2 TicketsCards overflowHidden">
            <Card.Body>
              <TicketForm onSubmit={handleSubmit} />
            </Card.Body>
          </Card>
        </Col>
      
        <Col>
          <Card className="TicketsCards">
            <Card.Body>
              <h4>Your Basket</h4>
              <ListGroup>
                {basket.map((b, i) => (
                  <ListGroup.Item key={i}>{`${b.name}: ${b.from} → ${b.to} on ${b.date}`}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col> 
      </Row>
    </div>
  );
}
