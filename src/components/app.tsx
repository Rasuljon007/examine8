import { Component } from "react";
import { generatePassword } from "../utils/generate-password";
import { Password } from "./pasword";
import { PasswordLength } from "./password-length";

export class App extends Component {
  state = {
    generatedPassword: "82/axb*9W;ttksnl",
    passwordLength: 12,
  };
  handleGeneretePassword = () => {
    this.setState(() => ({
      generatedPassword: generatePassword(this.state.passwordLength),
    }));
  };
  handlePasswordLengthChange = (length: number) => {
    this.setState({ passwordLength: length });
    this.handleGeneretePassword();
  };
  render() {
    return (
      <div className="container flex flex-col align-content-center">
        <h1 className=" main-text">
          Instantly generate a secure, random password with the LastPass online
          tool.
        </h1>
        <p>
          Use our online password generator tool to instantly create a secure,
          random password.
        </p>
        <Password
          password={this.state.generatedPassword}
          handleGeneretePassword={() => this.handleGeneretePassword()}
        />
        <div>
          <h1>Customize Password</h1>
          <p>
            You can customize the password length and character types used in
            the generated password.
          </p>
          <PasswordLength
            passwordLength={this.state.passwordLength}
            handlePasswordLengthChange={() =>
              this.handlePasswordLengthChange(this.state.passwordLength)
            }
          />
        </div>
      </div>
    );
  }
}
