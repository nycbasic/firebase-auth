import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { Card, Form, Button } from "react-bootstrap";
import { signUp, login } from "../../../actions/Auth";

const AuthLayout = ({ data, signUp, login }) => {
  const {
    title,
    inputNames: { first, second, third },
    refs: { firstRef, secondRef, thirdRef },
    func,
    form,
  } = data;


  const handleSubmit = (e) => {
    e.preventDefault();
    if (func === "SignUp") {
      signUp(firstRef.current.value, secondRef.current.value);
    }
    if (func === "Login") {
      login(firstRef.current.value, secondRef.current.value);
      firstRef.current.value = "";
      secondRef.current.value = "";
    }
  };
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">{title}</h2>
            <Form>
              <Form.Group id="email">
                <Form.Label>{first}</Form.Label>
                <Form.Control type="email" ref={firstRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>{second}</Form.Label>
                <Form.Control type="password" ref={secondRef} required />
              </Form.Group>
              {!third ? null : (
                <Form.Group id="password-confirm">
                  <Form.Label>{third}</Form.Label>
                  <Form.Control type="password" ref={thirdRef} required />
                </Form.Group>
              )}
              <Button
                type="submit"
                className="w-100 mt-3"
                onClick={(e) => handleSubmit(e)}
              >
                {title}
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          {form === "login"
            ? "Forgot your password? Click here"
            : "Already have an account? Login"}
        </div>
      </div>
    </Container>
  );
};

export default connect(null, { signUp, login })(AuthLayout);
