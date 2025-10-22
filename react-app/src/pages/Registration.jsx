import { Component } from "react";
import RegistrationForm from "../components/RegistrationForm";
import { Card } from "react-bootstrap";

export default class Registration extends Component {
    handleRegistration = e => {
        this.props.onRegister(e);
    }

    render() {
        return (
            <Card>
                <Card.Body>
                    <RegistrationForm onRegister={this.handleRegistration} />
                </Card.Body>
            </Card>
        )
    }
}