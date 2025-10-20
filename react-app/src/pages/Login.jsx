import { Component } from "react";
import LoginForm from "../components/LoginForm";
export default class Login extends Component {
    state = {};

    handleLogin = e => {
        this.props.onLogin(true);
    }

    render() {
        return (
            <>
                <p>TODO - implement Login component</p>
                {/* TODO - apply LoginForm */}
                <LoginForm onLogin={this.handleLogin} />
            </>
        )
    }
}