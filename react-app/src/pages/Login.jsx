import { Component } from "react";
import LoginForm from "../components/LoginForm";
import { Card } from "react-bootstrap";

export default class Login extends Component {
    handleLogin = data => {
        this.props.onLogin(data);
    }

    render() {
        return (
            <Card>
                <Card.Body>
                    <LoginForm onLogin={this.handleLogin} />
                </Card.Body>
            </Card>
        )
    }
}