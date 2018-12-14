import React from "react";
import "./contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultState();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  defaultState() {
    return {
      name: "",
      organization: "",
      email: "",
      message: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  updateInput(key) {
    return e => {
      this.setState({ [key]: e.target.value });
    };
  }

  render() {
    return (
      <div className="contactFormContainer">
        <form className="contactForm" onSubmit={this.handleSubmit}>
          <label>Your Name: </label>
          <input
            onChange={this.updateInput("name")}
            type="text"
            value={this.state.name}
          />

          <label>Your Organization: </label>
          <input
            onChange={this.updateInput("organization")}
            type="text"
            value={this.state.organization}
          />

          <label>Your Email: </label>
          <input
            onChange={this.updateInput("email")}
            type="text"
            value={this.state.email}
          />

          <label>Message: </label>
          <textarea
            onChange={this.updateInput("message")}
            rows="10"
            value={this.state.message}
          />

          <input className="contactFormSubmit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Contact;
