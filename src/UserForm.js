import React, {useState} from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function UserForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        let emailValid = false;
        let passwordValid = false;

        if (email.length === 0) {
            setEmailError('Email is required');
        }
        else if (email.length < 6) {
            setEmailError('Email should be minimum 6 characters');
        }
        else if (email.indexOf(' ') >= 0) {
            setEmailError('Email cannot contain spaces');
        }
        else {
            setEmailError('')
            emailValid = true;
        }


        if (password.length === 0) {
            setPasswordError('Password is required');
        }
        else if (password.length < 3) {
            setPasswordError('Password should be minimum 3 characters');
        }
        else if (password.indexOf(' ') >= 0) {
            setPasswordError('Password cannot contain spaces');
        }
        else {
            setPasswordError('');
            passwordValid = true;
        }

        if (emailValid && passwordValid) {
            alert('Email: ' + email + '\nPassword:'  + password);
        }

    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
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
            {emailError.length > 0 &&
                <Alert variant="danger">{emailError}</Alert> }
            {passwordError.length > 0 &&
                <Alert variant="danger">{passwordError}</Alert> }

        </div>
    );
}

export default UserForm;