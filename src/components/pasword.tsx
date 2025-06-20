import React from "react";

interface PasswordProps {
  password: string;
  handleGeneretePassword: () => void;
}

export class Password extends React.Component<PasswordProps> {
  render() {
    const password = this.props.password;
    return (
      <div className="lp-pg-generated-password" data-module="passwordGenerator">
        <form id="GENERATED-PASSWORD-FORM">
          <input
            defaultValue={password}
            id="GENERATED-PASSWORD"
            className="lp-pg-generated-password__input"
            type="text"
          />
        </form>
        <div className="lp-pg-generated-password__icon-wrapper">
          <button
            data-clipboard-target="#GENERATED-PASSWORD"
            className="lp-pg-generated-password__icon lp-pg-generated-password__icon-copy"
          >
            <span className="lp-pg-tooltip-content">Copy</span>
          </button>
          <button
            onClick={() => this.props.handleGeneretePassword()}
            className="lp-pg-generated-password__icon lp-pg-generated-password__icon-generate"
          >
            <span className="lp-pg-tooltip-content">Generate</span>
          </button>
        </div>
      </div>
    );
  }
}
