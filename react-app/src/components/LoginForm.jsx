import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from "react"

export default function LoginForm(props) {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch()// TODO - implement login fetch to backend
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="email-input">Email:</InputGroup.Text>
                    <Form.Control
                        type="email"
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="email-input"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="password-input">Password:</InputGroup.Text>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        aria-label="Password"
                        aria-describedby="basic-addon2"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </InputGroup>
                <button type="submit">Login</button>
            </form>
        </>
    )
}