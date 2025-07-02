import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';

function UserForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label column="sm">Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={event => setEmail(event.target.value)}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label column="sm">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={event =>setPassword(event.target.value)}
                    />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form.Group>
            </Form>
            <br />
            Email entered: {email}
            <br />
            Password entered: {password}
        </div>
    );
}

export default UserForm;