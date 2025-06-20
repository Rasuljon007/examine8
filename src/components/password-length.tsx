import React, { Component } from "react";

interface PasswordLengthProps {
  passwordLength: number;
  handlePasswordLengthChange: (length: number) => void;
}

export class PasswordLength extends Component<PasswordLengthProps> {
  state = {
    length: this.props.passwordLength,
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ length: Number(event.target.value) });
    this.props.handlePasswordLengthChange(Number(event.target.value));
  };

  handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
  };

  render() {
    return (
        <form
          id="PASSWORD-LENGTH-FORM"
          className="lp-pg-password-length-form"
          onSubmit={this.handleFormSubmit}
        >
        <input
            type="number"
            value={this.state.length}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event)}
            min={'12'}
        />
          <input
            type="range"
            min="12"
            max="35"
            value={this.state.length}
            onChange={(event) => {
              this.handleChange(event);
              this.props.handlePasswordLengthChange(this.state.length);
            }}
          />
        </form>
    );
  }
}
