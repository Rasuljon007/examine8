import React from "react";

interface PasswordProps {
  password: string;
  handleGeneretePassword: () => void;
}

export class Password extends React.Component<PasswordProps> {
  handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Input changed:", event.target.value);
  };
  render() {
    return (
      <div className="lp-pg-generated-password" data-module="passwordGenerator">
        <form id="GENERATED-PASSWORD-FORM">
          <input
            onChange={this.handleOnchange}
            value={this.props.password}
            id="GENERATED-PASSWORD"
            className="lp-pg-generated-password__input"
            type="text"
          />
        </form>
        <div className="lp-pg-generated-password__icon-wrapper">
          <button
            onClick={() => {
              const passwordInput = document.getElementById(
                "GENERATED-PASSWORD"
              ) as HTMLInputElement;
              if (passwordInput) {
                passwordInput.select();
                document.execCommand("copy");
                alert("Password copied to clipboard!");
              }
            }}
            data-clipboard-target="#GENERATED-PASSWORD"
            className="lp-pg-generated-password__icon lp-pg-generated-password__icon-copy"
          >
            <span className="lp-pg-tooltip-content">Copy</span>
          </button>
          <button
            onClick={this.props.handleGeneretePassword}
            className="lp-pg-generated-password__icon lp-pg-generated-password__icon-generate"
          >
            <span className="lp-pg-tooltip-content">Generate</span>
          </button>
        </div>
      </div>
    );
  }
}
