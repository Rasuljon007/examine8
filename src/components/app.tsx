import { Component } from "react";
import { generatePassword } from "../utils/generate-password";
import { Password } from "./pasword";

export class App extends Component {
  state = {
    generatedPassword: "82/axb*9W;ttksnl",
  };
  handleGeneretePassword = () => {
    this.setState(() => ({
      generatedPassword: generatePassword(),
    }));
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
      </div>
    );
  }
}
