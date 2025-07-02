import React from 'react';
import { Form, Button } from 'react-bootstrap';

function UserForm() {
    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label column="sm">Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label column="sm">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form.Group>
            </Form>
        </div>
    );
}

export default UserForm;