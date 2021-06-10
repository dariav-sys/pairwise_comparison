import React, { Component } from "react";
import shortid from "shortid";

import ToggleButton from "./Button";

const alphabet = "ABCDEFGHIJKLMNOPRST".split("");

export default class Pairwise extends Component {
  toggleButtons = [];
  result = [];

  handleSubmitResult = () => {
    this.result.sort((a, b) => b.score - a.score);
    this.props.onSubmit(this.result);
  };

  handleChange = (labelToIncr, labelToDecr) => {
    this.result.forEach((el) => {
      if (el.label === labelToIncr) {
        el.score++;
      } else if (el.label === labelToDecr) {
        el.score--;
      }
    });
  };

  render() {
    const splicedArr = [...alphabet].splice(0, this.props.buttonNum);
    this.toggleButtons = [];
    this.result = [];
    for (let i = 0; i < this.props.buttonNum; i++) {
      let label = splicedArr[i];
      let score = 0;
      for (let j = i + 1; j < this.props.buttonNum; j++) {
        this.toggleButtons.push(
          <ToggleButton
            key={shortid.generate()}
            leftLabel={splicedArr[i]}
            rightLabel={splicedArr[j]}
            onChange={this.handleChange}
          />
        );
        score++;
      }
      this.result.push({ label, score });
    }
    return (
      <>
        <div className="btn-container">
          {this.toggleButtons}
          <button className="btn" onClick={this.handleSubmitResult}>
            Get result
          </button>
        </div>
      </>
    );
  }
}
