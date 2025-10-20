import React, { useState } from "react";
import { Card, Form, Row, Col } from "react-bootstrap";

export default function DestinationCard(props) {
    // greaceful prop error handling:
    let city = { image: '', name: '', country: '' }
    if (props.city) city = props.city

    return (
        <>
            <Card className="mb-3 shadow-sm">
                <Card.Img variant="top" src={city.image} />
                <Card.Body>
                    <Card.Title>{city.name}</Card.Title>
                    <Card.Text>{city.country}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}