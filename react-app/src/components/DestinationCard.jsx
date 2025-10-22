import React, { useState } from "react";
import { Card, Form, Row, Col } from "react-bootstrap";

export default function DestinationCard(props) {
    // greaceful props error handling:
    let city = { image: '', name: '', country: '' }
    if (props.city) city = props.city

    return (
        <>
            <Card className="mb-3 shadow-sm cards">
                <Card.Img variant="top" src={city.image} className="card-img" />
                <Card.Body>
                    <Card.Title>{city.name}</Card.Title>
                    <Card.Text>{city.country}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}