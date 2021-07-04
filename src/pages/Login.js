import React, { Component } from "react";
import "./verticalcenter.css";
import { Button, Form} from "react-bootstrap";


class Login extends Component {
    state = {};
    render() {
      return (
        <div class="vcenter">
        <Form>
          <h1>Login</h1>
          <Form.Group controlId="fromTime">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="Enter the Name" />
            <Form.Label>Password </Form.Label>
            <Form.Control type="password" placeholder="password" />

          </Form.Group>


         <Button style ={{background:"red"}} variant="primary" type="submit">
            Login
                      </Button>
        </Form>
      </div>
    
      );
    }
  }
  
  export default Login;
  