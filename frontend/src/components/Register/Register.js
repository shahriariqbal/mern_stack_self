import React from "react";
import "./Register.css";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const register = () => {
  return (
    <div className="container d-flex justify-content-center py-5  my-5">
      <Form className="col-md-6 py-5 px-4 border rounded shadow">
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>
            Name
          </Label>
          <Col sm={10}>
            <Input type="text" name="name" placeholder="Full Name" />
          </Col>
        </FormGroup>
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
              placeholder="Password"
            />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 1 }}>
            <Button>Register</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};

export default register;
