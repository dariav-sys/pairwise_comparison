import React, { Component } from "react";

export default class Form extends Component {
  state = {
    optionName: "",
    options: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (
      !this.state.optionName ||
      this.state.options.includes(this.state.optionName)
    )
      return;

    this.state.options.push(this.state.optionName);
    this.props.onSubmit(this.state.options);
    this.setState({ optionName: "" });
  };

  handleChange = (e) => {
    this.setState({ optionName: e.currentTarget.value });
  };

  render() {
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            <input
              className="input"
              type="text"
              name="newItem"
              value={this.state.optionName}
              onChange={this.handleChange}
              placeholder="Enter item"
            />
          </label>
          <button className="btn-add" type="submit">
            Add
          </button>
        </form>
      </>
    );
  }
}
