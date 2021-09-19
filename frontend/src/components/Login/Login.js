import React from "react";
import "./Login.css";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

const login = () => {
  return (
    <div className="container d-flex justify-content-center py-5  my-5">
      <Form className="col-md-6 py-5 px-4 border rounded shadow">
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>
            Password
          </Label>
          <Col sm={10}>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password placeholder"
            />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 1 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};

export default login;
