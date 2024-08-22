import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "../css/Login.css";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const loginUser = (e) => {
        e.preventDefault();
        console.log(e);
        if (!email || !password) {
            alert("입력란을 입력하세요");
            return;
        }
        setAuthenticate(true);
        navigate("/");
    };
    return (
        <Container className="login-container">
            <Row className="justify-content-center align-items-center">
                <Col md={5}>
                    <Form onSubmit={(e) => loginUser(e)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                maxLength={30}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                maxLength={30}
                                minLength={7}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                        >
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="danger" type="submit">
                            로그인
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
