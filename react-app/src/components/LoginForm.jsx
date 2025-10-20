import { useState } from "react"
import { Button, Form} from 'react-bootstrap';

export default function LoginForm(props) {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3333/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password })
        })
        .then(response => {
            if (response.ok) {
                props.onLogin(true);
            } 
            else {
                // Handle login error
            }
        })
        .catch(error => {
            console.error('Error during login:', error);
        });
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
        console.log(email)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
        console.log(password)
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" onChange={handleEmailChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </>
    )
}