import { useState } from "react"
import { Button, Form} from 'react-bootstrap';

export default function LoginForm(props) {
    const [invalidLogin, setInvalidLogin] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        const formElements = e.target.elements

        const email = formElements.formEmail.value
        const password = formElements.formPassword.value

        fetch('http://localhost:3333/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password })
        })
        .then(async response => {
            if (response.ok) {
                const data = await response.json();
                props.onLogin(data.user);
            } 
        })
        .catch(error => {
            console.error('Error during login:', error);
        });
        
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
            {invalidLogin && <p className="text-danger mt-3">Invalid email or password</p>}
        </Form>
    )
}