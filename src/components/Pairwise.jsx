import React, { Component } from "react";
import shortid from "shortid";

import ToggleButton from "./Button";

export default class Pairwise extends Component {
  toggleButtons = [];
  result = [];

  handleChange = (labelToIncr, labelToDecr, isFirstToggle) => {
    this.result.forEach((el) => {
      if (el.label === labelToIncr) {
        el.score++;
      } else if (el.label === labelToDecr && !isFirstToggle) {
        el.score--;
      }
    });
    this.props.onSubmit(this.result);
  };

  render() {
    for (let i = 0; i < this.props.options.length; i++) {
      let label = this.props.options[i];
      for (let j = i + 1; j < this.props.options.length; j++) {
        if (
          !this.toggleButtons.find(
            (el) =>
              el.props.leftLabel === this.props.options[i] &&
              el.props.rightLabel === this.props.options[j]
          )
        ) {
          this.toggleButtons.push(
            <ToggleButton
              key={shortid.generate()}
              leftLabel={this.props.options[i]}
              rightLabel={this.props.options[j]}
              onChange={this.handleChange}
            />
          );
        }
      }

      if (!this.result.find((el) => el.label === label))
        this.result.push({ label, score: 0 });
    }

    return (
      <>
        <div className="btn-container">
          {this.toggleButtons.length ? <h1>Compare Items</h1> : ""}
          <div>{this.toggleButtons}</div>
        </div>
      </>
    );
  }
}
