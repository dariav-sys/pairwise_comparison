import React, { Component } from "react";
import Form from "./components/Form";
import Pairwise from "./components/Pairwise";
import Result from "./components/Result";

export default class App extends Component {
  state = {
    options: [],
    result: [],
  };

  handleFormSubmit = (options) => {
    let result = [];
    options.forEach((option) => {
      const found = this.state.result.find((el) => el.label === option);
      const score = found ? found.score : 0;
      result.push({ label: option, score });
    });

    this.setState({
      options,
      result,
    });
  };

  handlePairwiseSubmit = (result) => {
    this.setState({
      result: result,
    });
  };

  render() {
    return (
      <>
        <div className="wrapper">
          <div className="resultField">
            <Form onSubmit={this.handleFormSubmit} />
            <Result result={this.state.result} />
          </div>
          <div className="resultField">
            <Pairwise
              onSubmit={this.handlePairwiseSubmit}
              options={this.state.options}
            />
          </div>
        </div>
      </>
    );
  }
}
