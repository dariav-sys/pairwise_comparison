import React, { Component } from "react";

export default class Form extends Component {
  state = {
    buttonNum: 0,
  };

  handleChange = (e) => {
    this.setState({ buttonNum: Number(e.currentTarget.value) });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.buttonNum);
  };

  render() {
    return (
      <>
        <form className="form">
          <label htmlFor={this.nameInputId}>
            <select
              className="input"
              type="select"
              name="newItem"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Choose number"
              defaultValue="DEFAULT"
            >
              <option value="DEFAULT" disabled>
                -- select an option --
              </option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </label>
          <button className="btn-add" type="submit" onClick={this.handleSubmit}>
            RUN
          </button>
        </form>
      </>
    );
  }
}
