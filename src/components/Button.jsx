import React, { Component } from "react";
import shortid from "shortid";

export default class ToggleButton extends Component {
  ToggleState = {
    NONE: 0,
    LEFT: 1,
    RIGHT: 2,
  };

  state = {
    toggle: this.ToggleState.NONE,
  };

  toggleState = (e) => {
    const isFirstToggle = this.state.toggle === this.ToggleState.NONE;
    if (e.currentTarget.value === this.props.leftLabel) {
      this.setState({ toggle: this.ToggleState.LEFT });
      this.props.onChange(
        this.props.leftLabel,
        this.props.rightLabel,
        isFirstToggle
      );
    } else {
      this.setState({ toggle: this.ToggleState.RIGHT });
      this.props.onChange(
        this.props.rightLabel,
        this.props.leftLabel,
        isFirstToggle
      );
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
          checked={this.state.toggle === this.ToggleState.LEFT}
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
          checked={this.state.toggle === this.ToggleState.RIGHT}
        />
        <label htmlFor={`${this.props.rightLabel}_${id}`}>
          {this.props.rightLabel}
        </label>
      </form>
    );
  }
}
