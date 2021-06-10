import React, { Component } from "react";
import shortid from "shortid";

export default class ToggleButton extends Component {
  state = {
    toggle: false,
  };

  toggleState = () => {
    this.setState({
      toggle: !this.state.toggle,
    });

    if (!this.state.toggle) {
      this.props.onChange(this.props.rightLabel, this.props.leftLabel);
    } else {
      this.props.onChange(this.props.leftLabel, this.props.rightLabel);
    }
  };

  render() {
    const id = shortid.generate();
    return (
      <form className="switch-field">
        <input
          type="radio"
          id={`${this.props.leftLabel}_${id}`}
          value={this.props.leftLabel}
          name="switchToggle"
          onChange={this.toggleState}
          checked={!this.state.toggle}
        />
        <label htmlFor={`${this.props.leftLabel}_${id}`}>
          {this.props.leftLabel}
        </label>

        <input
          type="radio"
          id={`${this.props.rightLabel}_${id}`}
          name="switchToggle"
          value={this.props.rightLabel}
          onChange={this.toggleState}
          checked={this.state.toggle}
        />
        <label htmlFor={`${this.props.rightLabel}_${id}`}>
          {this.props.rightLabel}
        </label>
      </form>
    );
  }
}
