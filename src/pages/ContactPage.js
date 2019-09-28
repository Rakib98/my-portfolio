import React from "react";
/* import axios from 'axios'; */
import Hero from "../components/Hero";
import Content from "../components/Content";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: "",
      emailSent: "no"
    };
  }

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  /* handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            disabled: true,
            emailSent: false
        });

        axios.post('http://localhost:3030/api/email', this.state)
        .then(res => {
            if(res.data.success) {
                this.setState({
                    disabled: false,
                    emailSent: true
                });
            } else {
                this.setState({
                    disabled: false,
                    emailSent: false
                });
            }
        })
        .catch(err => {
            this.setState({
                disabled:false,
                emailSent:false
            });
        })
    } */

  render() {
    return (
      <div>
        <Hero title={this.props.title} />

        <Content>
          <h4 className="alert alert-danger">
            CONTACT FORM CURRENTLY NOT WORKING.
          </h4>
          <p>
            I am currently working on the submission process, so that the
            message can be send to my email. For questions contact me with the
            email written in my CV. Thanks
          </p>
          <Form /* onSubmit={this.handleSubmit} */>
            <fieldset disabled>
              <Form.Group>
                <Form.Label htmlFor="full-name">Full Name</Form.Label>
                <Form.Control
                  id="full-name"
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  id="email"
                  name="email"
                  type="email"
                  value={this.state.eamil}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="message">Message</Form.Label>
                <Form.Control
                  id="message"
                  name="message"
                  as="textarea"
                  rows="3"
                  value={this.state.message}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Button
                className="btn-block"
                variant="primary"
                type="submit"
                disabled={this.state.disabled}
              >
                Send
              </Button>

              <br />
              {this.state.emailSent === true && (
                <p className="alert alert-success">Email Sent</p>
              )}
              {this.state.emailSent === false && (
                <p className="alert alert-danger">Email NOT Sent</p>
              )}
            </fieldset>
          </Form>
        </Content>
      </div>
    );
  }
}

export default ContactPage;
