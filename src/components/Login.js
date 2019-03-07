import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Message,
  Segment
} from "semantic-ui-react";

const loginFormStyle = {
  backgroundColor: "#1a1a1a",
  height: 1000
};

const gridStyle = {
  maxWidth: 450,
  backgroundColor: "black"
};

const formbackground = {
  backgroundColor: "black"
};

const buttonstyle = {
  backgroundColor: "DarkOrange",
  color: "white"
};

const headerstyle = {
  backgroundColor: "black",
  paddingTop: 5,
  color: "DarkOrange"
};

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    const { username, password } = this.state;
    e.preventDefault();
  };

  render() {
    return (
      <div style={loginFormStyle}>
        <Grid
          textAlign="center"
          style={{ height: "100%", backgroundColor: "black" }}
          verticalAlign="middle"
        >
          <Grid.Column style={gridStyle}>
            <Header as="h2" style={headerstyle} textAlign="center">
              <Icon name="chat" /> Login to your account
            </Header>
            <Form size="large" onSubmit={this.onSubmit}>
              <Segment stacked style={formbackground}>
                <Form.Input
                  fluid
                  name="email"
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  onChange={this.onChange}
                />
                <Form.Input
                  fluid
                  name="password"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  onChange={this.onChange}
                />

                <Button color="teal" fluid size="large" style={buttonstyle}>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message color="black" style={{ backgroundColor: "black" }}>
              New to us? <a href="#"> Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Login;
