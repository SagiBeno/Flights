import { useState } from "react"
import { Button, Form} from 'react-bootstrap';

export default function RegistrationForm(props) {
    const [invalidRegistration, setInvalidRegistration] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        const formElements = e.target.elements

        const username = formElements.formUsername.value
        const email = formElements.formEmail.value
        const password = formElements.formPassword.value
        const confirmPassword = formElements.formConfirmPassword.value

        if (password !== confirmPassword) {
            setInvalidRegistration('Passwords do not match')
            return
        }
        else if(password.length < 8) {
            setInvalidRegistration('Password must be at least 8 characters long')
            return
        }

        fetch('http://localhost:3333/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, email: email, password: password })
        })
        .then(async response => {
            if (response.ok) {
                const data = await response.json();
                props.onLogin(data.user);
            } 
            else{
                const errorData = await response.json();
                setInvalidRegistration(errorData.message || 'Registration failed');
            }
        })
        .catch(error => {
            console.error('Error during registration:', error);
        });
        
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" required/>
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Register
            </Button>
            {invalidRegistration && <p className="text-danger mt-3">{invalidRegistration}</p>}
            <p className="mt-3">
                Already have an account? <a href="/">Login here</a>
            </p>
        </Form>
    )
}